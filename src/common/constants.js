// 常量信息

// 所有请求后台的url地址
export const url = {
  get_user_info: '/api/v3/sso/get_user_info',
  login_url: '/api/v3/sso/login',   // 登录
  logout_url: '/api/v3/sso/logout',        // 退出
  register_url: '/api/v3/sso/register', // 注册
  update_user_info: '/api/v3/sso/update_user_info', // 修改资料
  change_password: '/api/v3/sso/change_password',// 修改密码
  send_register_code: '/api/v3/sso/send_register_code', //发送注册验证码
  send_reset_password_code:'/api/v3/sso/send_reset_password_code',  //重置密码发邮件
  validate_code: '/api/v3/sso/validate_code', //重置密码校验密码
  send_change_contact_code: '/api/v3/sso/send_change_contact_code',  //修改手机、邮箱验证码发送
  update_contact:'/api/v3/sso/update_user_contact',  //修改手机 邮箱
  reset_pwd:'/api/v3/sso/reset_password',//重置密码

  marketing_url: '/api/zws/v1/marketing/advertisements', // 广告,讲师
  news_url: '/api/zws/v1/cms/news', // 新闻 新闻中心
  newsdetail_url: '/api/zws/v1/cms/news/', // 新闻详情

  all_courses: '/api/v3/els/courses', //所有课程        课程详情   章节
  course_categories: '/api/v3/els/course-categories',//所有课程分类   某个课程分类详情  某个课程分类下的课程
  course_private: '/api/v3/analysis/courses/', //课程的私人信息
  lecturers_url: '/api/v3/els/lecturers', //获取全部讲师   获取讲师资源
  collection_list:'/api/v3/analysis/my-courses/collection-list', //收藏课程
  my_courses:'/api/v3/analysis/my-courses', //我的课程
  orders_url:'/api/v3/commerce/orders',//我的订单
  records_url:'/api/v3/commerce/coins/records', //充值记录


  video_url:'/api/videos/' // 根据ID获取视频路径
}

// 新闻类型
export const newsType = {
  NORMAL: '0', // 普通/项目新闻
  FINANCE: '10', // 财经动态
  INTERNATIONAL: '20', // 国际交流
  EDUCATION: '30' // 教育培训
  //NOTICE: '40', // 公司通告
}
export const newsTypeNames = {
  '-1':'全部新闻',
  '0': '新闻资讯',
  '10': '业务动态',
  '20': '培训项目',
  '30': '信息公告'
  //'40': '公司通告',
}
export const newsTypeAll = [
  {
    name:"全部新闻",
    type:"-1"
  },
  {
    name:"新闻资讯",
    type:"0"
  },
  {
    name:"业务动态",
    type:"10"
  },
  {
    name:"培训项目",
    type:"20"
  },
  {
    name:"信息公告",
    type:"30"
  },
]
// 广告类型
export const adsType = {
  BANNER: 0,
  TOP: 1,
  CONTENT: 2,
  SIDE: 3,
  LECTURER: 4,
  HOT_COURSE: 5
}
export const HOST = 'www.cfcedu.org.cn';
