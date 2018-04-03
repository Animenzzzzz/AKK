import {url} from 'common/constants'
import {post,get} from 'common/axios'
import {cryptoPasswd,paramify} from 'common/methods'

// 获取登陆用户的信息
export function getUserInfo(callback) {
  post(url.get_user_info,{},function(res){
    callback(res)
  })
}

// 用户登陆
export function login(username, password,remember, callback) {
  password = cryptoPasswd(password)
  var params = paramify({login_name: username, password: password})
  params = params ? '?' + params : ''
  post(url.login_url+ params ,{
    remember:remember
  }, function (res) {
    callback(res)
  })
}

// 修改密码
export function changePassword(oldPassword, newPassword, callback) {
  oldPassword = cryptoPasswd(oldPassword)
  var params = paramify({old_password: oldPassword, new_password: newPassword})
  params = params ? '?' + params : ''
  post(url.change_password+ params,{},
    function (res) {
    callback(res)
  })
}
//用户退出登录
export function logout(callback) {
  post(url.logout_url, {}, function (res) {
    callback(res)
  })
}
//发送注册验证码   手机号或邮箱号
export function sendRegisterCode(contact,callback){
  post(url.send_register_code+"?contact="+contact,{}, function (res) {
    callback(res)
  })
}

//用户注册 nickname 昵称 password  contact code
export function register(nickname,password,contact,code,callback) {
  password = cryptoPasswd(password)
  var params = paramify({nickname: nickname, password: password,contact:contact,code:code})
  params = params ? '?' + params : ''
  post(url.register_url+params,{}, function (res) {
    callback(res)
  })
}
//用户修改资料 nickname gender birthday addr
export function updateInfo(nickname,gender,birthday,addr,callback) {
  var params = paramify({nickname: nickname, gender: gender,birthday:birthday,addr:addr})
  params = params ? '?' + params : ''
    post(url.update_user_info+params,{},function (res){
      callback(res)
    })
}

//重置密码发邮件
export function sendResetPasswordCode(contact,callback) {
  post(url.send_reset_password_code+"?contact="+contact,{},function (res){
    callback(res)
  })
}
//重置密码校验密码
export function validateCode(contact,code,callback) {
  var params = paramify({contact: contact, code: code})
  params = params ? '?' + params : ''
  post(url.validate_code+params,{},function (res){
    callback(res)
  })
}
//修改手机、邮箱验证码发送
export function sendChangeContactCode(contact,callback){
  post(url.send_change_contact_code+"?contact="+contact,{},function (res){
    callback(res)
  })
}
//修改手机 邮箱
export function updateContact(password,contact,code,callback){
  password = cryptoPasswd(password)
  var params = paramify({password: password,contact:contact, code: code})
  params = params ? '?' + params : ''
  post(url.update_contact+params,{},function (res){
    callback(res)
  })
}
//重置密码
export function resetPwd(contact,code,new_password,callback){
  new_password = cryptoPasswd(new_password)
  var params = paramify({contact:contact,code: code,new_password: new_password})
  params = params ? '?' + params : ''
  post(url.reset_pwd+params,{},function (res){
    callback(res)
  })
}
//收藏课程
export function collectionList(callback){
  get(url.collection_list,{},function (res){
    callback(res)
  })
}
//我的课程
export function myCourses(callback){
  get(url.my_courses,{},function (res){
    callback(res)
  })
}
