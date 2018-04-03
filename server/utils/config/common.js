// 公用方法
import md5 from 'blueimp-md5'
// 转换params对象为url参数格式字符串
export function paramify(params) {
  let ret = [];
  for (var key in params) {
    let p = encodeURIComponent(params[key]);
    ret.push(`${key}=${p}`);
  }
  return ret.join('&');
}

/**
 * 获取api需要的头
 */
export function getHeaders(req, contentType) {
  //let ip = req.ip.replace(/[^\d]*(\d+(\.\d+){3})[^\d]*/, '$1');
  let ret = {
    'Cookie': req.get('cookie'),
    'User-Agent': req.get('user-agent'),
    'X-Forwarded-For': req.get('x-forwarded-for'),
    'X-Real-Ip': req.get('x-real-ip')
  };
  if (contentType) {
    ret['Content-Type'] = contentType;
  }
  return ret;
}

export function getNoPrefixUrl(path, params = {}) {
  const paramStr = paramify(params);
  const url = path.replace(/^\//, '') + (paramStr ? '?' + paramStr : '');
  return url;
}

// 对象排序
export function keySort(arys) {
  var newkey = Object.keys(arys).sort();
  var newObj = {};
  for(var i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = arys[newkey[i]];
  }
  return newObj;
}
// 对象转url
export function urlEncode(param, key, encode) {
  if(param == null) return '';
  var paramStr = '';
  var t = typeof(param);
  if(t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
  } else {
    for(var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += '&' + urlEncode(param[i], k, encode);
    }
  }
  return paramStr.substr(1);
}

// 对象转URL
export function objToUrl(params) {
  const SALT = 'd71VHNbbZ6SpxaOzrnmNEzCqKQ9YOwly';
  var sortParams = keySort(params);  // 排序
  var str = "";
  for(var k in sortParams){
    str += k +"="+encodeURIComponent(sortParams[k])+"&"
  }
  var time = new Date().valueOf();
  var encrypt = str+"time="+time+"&salt="+SALT;
  var hash = md5(encrypt);
  sortParams["time"] = time;
  sortParams["hash"] = hash;
  return urlEncode(sortParams);
}
