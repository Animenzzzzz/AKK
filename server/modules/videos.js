var http = require("../utils/http/httpClient");
import { objToUrl } from '../utils/config/common';

const MOBILE_VIDEO_URL = "http://p.bokecc.com/api/mobile?"
const USER_ID = '07CF905A4E094177';

var Videos = function () {}

// 根据视频ID获取视频的url
Videos.prototype.getVideoUrl= function (vid,callback) {
  var params = {
    userid: USER_ID,
    videoid: vid,
    format: 'json',
    hlsflag: 0,
    httpsflag:1,
    authtimeout:3600 // 过期时间
  }
  var url = MOBILE_VIDEO_URL + objToUrl(params);
  http.getData({
    method: 'post',
    uri: url,
    json: true
  },callback)
}
module.exports = new Videos();
