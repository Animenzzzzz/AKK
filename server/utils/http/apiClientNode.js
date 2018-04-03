/**
 * 服务端使用apiClient，通过 node-fetch 实现
 */
import fetch from 'node-fetch';
import FormData from 'form-data';
import ApiClient from './apiClient';
import { paramify } from '../config/common';

class ApiClientNode extends ApiClient {

    headers = null;
    _cache = {}; // 缓存请求结果，减少请求次数

    /**
     * 保存authToken，目前为cookie
     */
    setAuthToken(token) {
        this._authToken = token;
    }
    getAuthToken() {
        return this._authToken;
    }

    _getCacheKey(method, url) {
        return method.toLowerCase() + '_' + url;
    }

    /**
     * 服务器端调用，返回Yii的restful格式，json中只有真正的数据，其他内容都在header中
     */
    request(method, url, body = {}, headers = {}) {
        // 优先从缓存获取
        const cacheKey = this._getCacheKey(method, url);
        if (this._cache[cacheKey]) {
            console.log('[fetch] from cache: ', method, url);
            return Promise.resolve(this._cache[cacheKey]);
        }

        let fetchOptions = {
            method: method,
            timeout: 30000, // 30s超时
            credentials: 'same-origin', // 同源cookie传递
            headers: Object.assign({
                //'Content-Type': 'application/x-www-form-urlencoded', // 因提交文件时，类型会带上boundary，因此默认不加该类型，改到下面判断
                // 'Accept': 'application/json',
                'X-Requested-With': 'fetch',
                'X-Device': 'www,1.0'
            }, this.headers || {}, headers || {})
        }

        const contentType = ApiClient.HEADER_CONTENT_TYPE;

        // multer fetch操作必须清空Content-Type，因会附带boundary
        if (headers[contentType] === ApiClient.CONTENT_TYPE_MULTI) {
            delete fetchOptions.headers[contentType];
        }

        // 组装body：字符、json转换、formData
        if (method.toLowerCase() !== 'get' && method.toLowerCase() !== 'head') {
          if (fetchOptions.headers[contentType] === ApiClient.CONTENT_TYPE_JSON) {
            fetchOptions.body = JSON.stringify(body);
            // api Yii要求不能是application/json类型
            fetchOptions.headers[contentType] = ApiClient.CONTENT_TYPE_FORM;
          } else {
            fetchOptions.body = (body instanceof FormData) ? body : paramify(body); // paramify中会做urlencode
          }
        }
        // 客户端patch一直失败，用put替换才行，单服务器端向api发送时，修正为patch
        if (fetchOptions.method.toLowerCase() === 'put') {
            fetchOptions.method = 'patch';
        }

        // fetch

        url = url.startsWith('http') ? url : `${this.prefix}/${url}`;

        let httpStatus, headerPage, headerTotal, headerCookie;
        console.log('[fetch] begin: ', fetchOptions.method, url, fetchOptions.body);
        const t = Date.now();
        //console.log('..... request options in apiClientNode: ', fetchOptions);
        return fetch(url, fetchOptions).then( (res => {
                httpStatus = res.status;
                headerPage = res.headers.get('X-Pagination-Current-Page');
                headerTotal = res.headers.get('X-Pagination-Total-Count');
                // cookie透传
                headerCookie = res.headers.get('Set-Cookie');
                if (headerCookie && headerCookie.length) {
                    this.setAuthToken(headerCookie);
                }
                return res.text();
            }).bind(this)).then((text) => {
                //console.log('[fetch] end response('+(Date.now() - t)+'ms): ', fetchOptions.method, url, text);
                return JSON.parse(text || null); // 如果返回空，则用null替换，以便转换后变为null
            }).then( (json => {
                if (200 <= httpStatus && httpStatus < 300) {
                    console.log('[fetch] end succ.', fetchOptions.method, url);
                    let ret = {status: httpStatus, message: '', data: json};
                    if (headerPage) {
                        ret.data = {
                            list: json,
                            total: headerTotal - 0
                        }
                    }
                    if (fetchOptions.method.toLowerCase() === 'get') {
                        this._cache[cacheKey] = ret; // 缓存数据
                    }
                    return ret;
                } else {
                    return Promise.reject(json);
                }
            }).bind(this)).catch( (error => {
                if (fetchOptions.method.toLowerCase() === 'get') {
                    this._cache[cacheKey] = error; // 缓存数据
                }
                console.log('[fetch] end fail: ', fetchOptions.method, url, error, error.stack);
                return Promise.reject(error);
            }).bind(this));
    }

}

module.exports = ApiClientNode;
