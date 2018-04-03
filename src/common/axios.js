/**
 *  对axios进行模块封装
 */
import axios from 'axios'

// 发送get请求data默认不传为{}
export function get(url, data = {}, callback) {
  const debug = process.env.NODE_ENV !== 'production' ? url = 'http://localhost:3000' + url : url
  axios.get(url, data).then(function (res) {
      callback(res.data)
  }).catch(function (err) {
    console.log(err)
    callback(null)
  })
}

// 发送post请求data默认不传为{}
export function post(url, data = {}, callback) {
  const debug = process.env.NODE_ENV !== 'production' ? url = 'http://localhost:3000' + url : url
  axios.post(url, data).then(function (res) {
      callback(res.data)
  }).catch(function (err) {
    console.log(err)
    callback(null)
  })
}
