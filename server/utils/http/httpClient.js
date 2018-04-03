// http 请求工具
var rp = require('request-promise');
var logger = require('log4js').getLogger("httpClient");

var HttpClient = function () {}

HttpClient.prototype.getData = function (options,callback) {
    return rp(options).then(function (json) {
      logger.info('success');
      return callback(200, json);
    }).catch(function (err) {
      logger.error('error:', err);
      return callback(500, err);
    })
}
module.exports = new HttpClient();
