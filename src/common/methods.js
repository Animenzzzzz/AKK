// 常用方法
import md5 from 'blueimp-md5'


/**
 * 加密密码
 */
export function cryptoPasswd(pwd) {
  let password = pwd.split('').reverse().join('');
  password = md5('uokoaduw' + password + 'auhgniq');
  return password;
}


// 转换params对象为url参数格式字符串
export function paramify(params) {
  let ret = [];
  for (var key in params) {
    let p = encodeURIComponent(params[key]);
    ret.push(`${key}=${p}`);
  }
  return ret.join('&');
}
// 获取实际课时
export function getCourseTime(seconds) {
  seconds = (seconds || 0) - 0;
  return Math.max(1, Math.round(Math.round(seconds / 60 / 45 * 10) / 10));
}
