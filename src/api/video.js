import {url} from 'common/constants'
import {get} from 'common/axios'

export function getVideo(vid,callback) {
  get(url.video_url+vid,{},function(res){
    callback(res)
  })
}
