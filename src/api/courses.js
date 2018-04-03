import {url} from 'common/constants'
import {get} from 'common/axios'
import {paramify} from 'common/methods'

//全部课程
export function allCourses(per_page,page,callback){
  var per_page= per_page==''?5:per_page;
  var page=page==''?1:page
  get(url.all_courses + '?per-page='+per_page+'&page='+page, {},function (res) {
    callback(res)
  })
}
//所有课程分类
export function courseCategories(callback){
  get(url.course_categories, {},function (res) {
    callback(res)
  })
}
// TODO 暂无使用
//某个课程分类详情
export function courseCategory(categoryId,callback){
  get(url.course_categories+'/'+ categoryId, {},function (res) {
    callback(res)
  })
}
//某个课程分类下的课程
export function courseCategoryCourses(categoryId,perpage,page,callback){
  var perpage= perpage==''?5:perpage;
  var page=page==''?1:page
  get(url.course_categories+'/'+categoryId+'/courses?per-page='+perpage+'&page='+page, {},function (res) {
    callback(res)
  })
}
//课程详情 TODO 需要修改
export function courseDetail(courseId,callback){
  get(url.all_courses+'/'+ courseId+ '?expand=lecturers', {},function (res) {
    callback(res)
  })
}
//课程的私人信息
export function coursePrivate(courseId,callback){
  get(url.course_private+ courseId, {},function (res) {
    callback(res)
  })
}
//章节
export function courseChapters(courseId,callback){
  get(url.all_courses+'/'+ courseId+'/chapters?expand=video', {},function (res) {
    callback(res)
  })
}

//获取所有讲师
export function teachers(perpage,page,callback){
  var perpage= perpage==''?8:perpage;
  var page= page==''?1:page;
  get(url.lecturers_url+"?per-page="+perpage+"&page="+page, {},function (res) {
    callback(res)
  })
}
//获取讲师详情
export function lecturers(id,callback){
  get(url.lecturers_url+"/"+id, {},function (res) {
    callback(res)
  })
}
