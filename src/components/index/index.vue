<template>
  <div class="index">
      <m-header :active="true"></m-header>
      <div class="swiper">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item , index) in banner" :key="index">
            <img class="bannerImg" :src="item.image" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="course">
        <div class="title">
          <p class="title-text">精品课程</p>
          <div class="course-box overflow">
            <div class="course-item left" v-for="(item,index) in course" :key="index">
              <img class="course-img" :src="item.image" alt="">
              <P class="course-type">{{item.title}}</P>
            </div>
          </div>
          <router-link tag="p"  to="" class="all_btn" to="/course">全部课程</router-link>
        </div>
      </div>
      <div class="about" >
        <div class="title">
          <p class="title-text">关于CFC</p>
          <div class="about-box overflow">
            <div class="about-item left" v-for="(item,index) in about" :key="index">
              <img class="about-img" :src="item.src" alt="">
              <P class="about-type">{{item.type}}</P>
              <p class="about-text">{{item.text}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="teacher" >
        <div class="title">
          <p class="title-text">金牌讲师</p>
          <div class="teacher-box overflow">
            <router-link tag="li" class="teacher-item left" v-for="(item,index) in teacher" :key="index" :to="{path: '/lecturer/'+item.action.split('/')[item.action.split('/').length-1]}">
              <img class="teacher-img" :src="item.image" alt="">
              <P class="teacher-type">{{item.title}}</P>
              <p class="teacher-text">{{item.content}}</p>
            </router-link>
          </div>
          <router-link tag="p"  to="/lecturer" class="all_btn">更多师资</router-link>
        </div>
      </div>
      <div class="news" >
        <div class="title">
          <p class="title-text">新闻中心</p>
          <div class="news-box overflow">
            <div class="news-item left" v-for="(item,index) in news" :key="index">
              <p class="box-title" v-if="index==0">新闻资讯</p>
              <p class="box-title" v-if="index==10">业务动态</p>
              <p class="box-title" v-if="index==20">培训项目</p>
              <p class="box-title" v-if="index==30">信息公告</p>
              <img class="news-img"  :src="item[0].photo_uri" alt="">
              <router-link tag="p" class="news-type" v-for="(news,index) in item" :key="index" :id="news.id"
                 :to="{path: '/news/'+news.id}">{{news.title}}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="loading-container" v-show="!course.length">
        <loading></loading>
      </div>
     <m-footer :active="true"></m-footer>
  </div>
</template>

<script>
    import MHeader from  'components/m-header/m-header'
    import MFooter from  'components/m-footer/m-footer'
    import Swiper from  'components/swiper/swiper'
    import Loading from 'components/loading/loading'
    import {news,marketing,newDetail,newsCenter} from 'api/home'
    import {adsType} from 'common/constants'
    import {getUserInfo} from 'api/userinfo'
    import { Swipe, SwipeItem } from 'mint-ui'
    export default {
        name: "index",
        data(){
          return{
            banner:[],
            teacher:[],
            course:[],
            news:[ ],
            about:[
              {
                src:"static/images/about-1.png",
                type:"国家引进",
                text:"国家发改委全国引进外国智力领导小组办公室引进并全力推广。"
              },
              {
                src:"static/images/about-2.png",
                type:"国际认证",
                text:"国际资本市场协会(ICMA)、英国雷丁大学(原牛津分校)颁发并全球通行。"
              },
              {
                src:"static/images/about-3.png",
                type:"学术支持",
                text:"清华大学五道口金融学院(原中国人民银行研究生部)、中国金融教育发展基金会、中国社科院、财政部财科所、北大、人大等机构专家联合研发。"
              },
              {
                src:"static/images/about-4.png",
                type:"国家金融行业标准",
                text:"全球所有著名金融机构一致认可，企业、院校广泛认同。中国人民银行于2016年12月28日正式颁布实施首个国家公司金融行业标准《公司金融顾问》(银发【2016】325号)。"
              }
            ]
          }
        },
        created(){
        //  this._getUserInfo()
        },
        components:{
            Swiper,
            MHeader,
            MFooter,
            Loading
        },
        mounted() {
          this._news()
          this._marketing()
        },
        methods: {
          //处理返回数据
          getThisData(res,type) {
            let thisData = [];
            for (var k in res.data) {
              if (res.data[k].ad_type == type) {
                thisData.push(res.data[k])
              }
            }
            return thisData
          },
          _news(){
            let that= this
            news(function (res) {
              if(res.data != null) {
                that.news = res.data.list;
              }
            })
           /* newsCenter(0,function (res) {
              console.log(res)
            })*/
          },
          _marketing(){
            let that= this
            marketing(function (res) {
              if(res != null) {
                that.banner = that.getThisData(res, adsType.BANNER)
                that.teacher = that.getThisData(res, adsType.LECTURER)
                console.log(res)
                that.course = that.getThisData(res, adsType.HOT_COURSE)
              }
            })
          },
          _getUserInfo(){
            getUserInfo(function (res) {
              if(res!=null){
                cfc.isLogin = true
                cfc.userInfo = res.data
                cfc.avatar = res.data.avatar
              }
            })
          }
        }
    }
</script>

<style scoped lang="scss">
  @import "static/scss/_variable";
  .swiper{
    height:315px;
    .bannerImg{
      width:100%;
      height:315px;
    }
  }
  .title{
    text-align: center;
    p.title-text{
      padding: 40px;
      margin:0 auto;
      padding-bottom:8px;
      margin-bottom: 40px;
      color:$title-color;
      font-size:$font-size-large-xx;
      width: 222px;
      border-bottom: $titlt-line;/*no*/
      @extend .title;
    }
  }
  .course-box{
    margin:0 28px;
    .course-item{
      margin-right:$element-distance;
      width:$item-width;
      border:$box-line;/*no*/
      margin-bottom: $element-distance;
      .course-img{
        width:100%;
        height:218px;
      }
      &:nth-child(2n){
        margin-right: 0;
      }
    }
    .course-type{
      font-size:$font-size-large;
      color:$type-color;
      line-height: 35px;
      margin:20px 10px;
      height:65px;
    }
  }
  .all_btn{
    margin:4px auto 34px auto;
    width:200px;
    height:50px;
    line-height: 50px;
    border-radius: 5px;/*no*/
    background:$btn-background-color;
    font-size:$font-size-large;
    color:$nav-active-color;
  }
  .about{
    background: $gray-background;
  }
  .about-box{
    margin:0 28px;
    padding-bottom: 30px;
    .about-item{
      width:$item-width;
      box-shadow: 1px 1px 5px #dcdcdc;/*no*/
      background:$nav-active-color;
      margin-right: $element-distance;
      margin-bottom:$element-distance;
      height:460px;
      .about-img{
        width:106px;
        height:106px;
        display: block;
        margin:32px auto;
      }
      &:nth-child(2n){
        margin-right: 0;
      }
      .about-type{
        border-top:$box-line;/*no*/
        padding:32px 0;
        text-align: center;
        color:$title-color;
        font-size:$font-size-large-xx;
      }
      .about-text{
        color:#555;
        font-size:$font-size-medium-x;
        text-align:justify;
        margin:0 15px;
        line-height: 25px;
      }
    }
  }
  .teacher-box{
    margin:0 28px;
    .teacher-item{
      width:$item-width;
      border:$box-line;
      background:$nav-active-color;
      margin-right:$element-distance;
      margin-bottom:$element-distance;
      height:400px;
      .teacher-img{
        width:230px;
        height:249px;
        display: block;
        margin:19px auto;
      }
      &:nth-child(2n){
        margin-right: 0;
      }
      .teacher-type{
        padding:16px 0;
        padding-top:0;
        text-align: center;
        color:$type-color;
        font-size:$font-size-large;
      }
      .teacher-text{
        color:$type-color;
        font-size:$font-size-medium-x;
        text-align: center;
        margin:0 23px;
        line-height: $element-distance;
      }
    }
  }
  .news{
    background: $gray-background;
  }
  .news-box{
    margin:0 28px;
    border-radius:  5px 5px 0 0 ;
    .news-item{
      .box-title{
        background: #2650ab;
        line-height:40px;
        font-size:$font-size-large;
        color:$nav-active-color;
        border-radius:5px;
        text-align: left;
        padding-left: 10px;
        margin-bottom: 10px;
      }
      width:273px;
      border:$box-line;
      background:$nav-active-color;
      margin-right: $element-distance;
      margin-bottom:$element-distance;
      height:370px;
      .news-img{
        width:257px;
        height:113px;
        display: block;
        margin:0 auto;
        margin-bottom:5px;
      }
      &:nth-child(2n){
        margin-right: 0;
      }
      .news-type{
        padding:0 8px;
        text-align: left;
        color:$title-color;
        font-size:$font-size-medium;
        line-height: 40px;
        display:block;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
      }
    }
  }
</style>
