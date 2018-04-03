// 首页
import {url, newsType, HOST} from 'common/constants'
import {get} from 'common/axios'
import {paramify} from 'common/methods'

// 广告,讲师,精品课程
export function marketing(callback) {
  var params = paramify({terminal_type: 'WWW', ad_position_uri: HOST})
  params = params ? '?' + params : ''
  get(url.marketing_url + params, {}, function (res) {
    callback(res)
  })
}
/*var result = {};
      for(var i in res.data.list){
        var list = [];
        for(var j=0;j<res.data.list[i].length;j++){
          list.push({
            id :res.data.list[i][j].id,
            title:res.data.list[i][j].title,
            photo_uri:res.data.list[i][j].photo_uri
          })
        }
        result[i.toString()] = list;
      }*/
// 新闻
export function news(callback) {
  const HOME_NEWS = [newsType.NORMAL, newsType.FINANCE, newsType.INTERNATIONAL, newsType.EDUCATION]
  var params = paramify({type: HOME_NEWS.join(','), ml_count: 5, home_page: 1})
  params = params ? '?' + params : ''
  get(url.news_url + params, {}, function (res) {
      callback(res)
  })
}

// 新闻中心
export function newsCenter(type,per_page,page,callback) {
  var type = type== ''? '':type;
  var per_page= per_page=='' ? 7: per_page;
  var page= page =='' ?1:page;
  get(url.news_url + "?type="+ type +"&per_page="+per_page+"&page="+page, {}, function (res) {
      callback(res)
  })
}

// 新闻详情
export function newDetail(newsId, callback) {
  get(url.newsdetail_url + newsId, {}, function (res) {
    callback(res)
  })
}
