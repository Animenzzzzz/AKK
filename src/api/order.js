import {url} from 'common/constants'
import {get} from 'common/axios'

//我的订单
export function orders(callback){
  get(url.orders_url,{},function (res){
    callback(res)
  })
}
//充值记录
export function records(callback){
  get(url.records_url,{},function (res){
    callback(res)
  })
}
