/**
 * ApiClient基类
 */
class ApiClient {

    static HEADER_CONTENT_TYPE = 'Content-Type';
    // 定义常用几种header头
    static CONTENT_TYPE_JSON   = 'application/json';
    static CONTENT_TYPE_FORM   = 'application/x-www-form-urlencoded';
    static CONTENT_TYPE_MULTI  = 'multipart/form-data';

    /**
     * 构造函数
     * @param {object}
     */
    constructor(config) {
        config = config || {};
        config = Object.assign({
            prefix: '/api'
        }, config || {});
        this.prefix = config.prefix;
    }

    /**
     * HTTP GET
     * @param {string} url
     */
    get(url) {
        return this.request('get', url);
    }

    /**
     * HTTP DELETE
     */
    delete(url) {
        return this.request('delete', url);
    }

    /**
     * HTTP POST
     */
    post(url, body = {}, headers = {}) {
        return this.request('post', url, body, headers);
    }

    /**
     * HTTP PUT
     */
    put(url, body = {}, headers={}) {
        return this.request('put', url, body, headers);
    }

    /**
     * HTTP PATCH
     */
    patch(url, body = {}, headers={}) {
        return this.patch('patch', url, body, headers);
    }

    /**
     * 需具体之类实现
     */
    request(method, url, body = {}, headers = {}) {
        throw new Error('尚未实现 `apiClient` 中的 `request()` 方法。');
    }

}

module.exports = ApiClient;
