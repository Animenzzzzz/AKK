/**
 * 客户端使用apiClient，通过 fetch 实现
 */
import ApiClient from './apiClient';
import { paramify } from '../config/common';

class ApiClientFetch extends ApiClient {

    // 客户端patch会失败，因此用put替换
    patch(url, body = {}, headers={}) {
        return this.put(url, body, headers);
    }

    /**
     * 客户端调用，发起实际的http请求
     *   因传入的body为object类型，因此需要根据不同请求方式进行组装：&连接字符串、json stringify、formData
     *   http请求结果为标准格式：{ status: 200, message: '', data: {} }
     */
    request(method, url, body = {}, headers = {}) {
        let fetchOptions = {
            method: method,
            timeout: 30000, // 30s超时
            credentials: 'same-origin', // 同源cookie传递
            headers: Object.assign({
                'Accept': 'application/json',
                'X-Requested-With': 'fetch'
            }, headers || {})
        }

        const contentType = ApiClient.HEADER_CONTENT_TYPE;

        // multer fetch操作必须清空Content-Type，因会附带boundary
        if (headers[contentType] === ApiClient.CONTENT_TYPE_MULTI) {
            delete fetchOptions.headers[contentType];
        } if (!headers[contentType]) { // 如登录时，会产生content-type=plain/text，因此未指定的api调用都设置为form类型
            fetchOptions.headers[contentType] = ApiClient.CONTENT_TYPE_FORM;
        }

        url = `${this.prefix}/${url}`;

        // 组装body：字符、json转换、formData
        if (method !== 'get' && method !== 'head') {
            if (fetchOptions.headers[contentType] === ApiClient.CONTENT_TYPE_JSON) {
                fetchOptions.body = JSON.stringify(body);
            } else {
                // 文件上传都走控件，不会再用到react中实现，故仅考虑一般情况即可
                //fetchOptions.body = (typeof FormData === 'function' && body instanceof FormData) ? body : paramify(body);
                fetchOptions.body = paramify(body);
            }
        } else {
            // get下url添加时间戳，防止缓存
            let t = 't=' + Date.now().toString(36);
            url += (/\?/.test(url) ? '&' : '?') + t;
        }

        // fetch
        require('fetch-ie8'); // 因其代码中使用self表示window对象，故无法通过 import 引用

        //console.log('[fetch] begin: ', fetchOptions.method, url, fetchOptions.body);
        const t = Date.now();
        return fetch(url, fetchOptions).then( (res => {
                return res.text();
            }).bind(this)).then((text) => {
                //console.log('[fetch] end response('+(Date.now() - t)+'ms): ', fetchOptions.method, url, text);
                return JSON.parse(text || null); // 如果返回空，则用null替换，以便转换后变为null
            }).then( json => {
                if (200 <= json.status && json.status < 300) {
                    //console.log('[fetch] end succ.', fetchOptions.method, url);
                    return json;
                } else {
                    return Promise.reject(json);
                }
            }).catch( error => {
                //console.log('[fetch] end fail: ', fetchOptions.method, url, error, error.stack);
                return Promise.reject(error);
            });
    }

}

module.exports = ApiClientFetch;
