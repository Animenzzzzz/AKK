<template>
  <div class="course">
    <m-header :active="true"></m-header>
    <scroll class="scroll-content" :data="courseType">
      <ul class="nav" >
        <li :class="[{'this-li':isAllCourse}]" @click="getAll" >
          <a >全部课程</a>
        </li>
        <li :class="{'this-li':index==thisLi}" v-for="(item,index) in courseType" :data-id="item.id" @click="toggle(item.id,index)">
          <a >{{item.name}}</a>
        </li>
      </ul>
    </scroll>
    <div>
      <p v-if="courseContent==''" class="none">暂无课程</p>
      <ul class="course-list">
        <li class="course-item" v-for="(item,index) in courseContent" :key="index" :data-id="item.id">
          <div class="left-box">
            <img :src="item.course_picture" alt="">
          </div>
          <div class="right-box">
            <p class="course-title"  style="-webkit-box-orient: vertical">{{item.course_name}}</p>
            <p class="course-text"  style="-webkit-box-orient: vertical" v-html="item.course_outlines"></p>
            <p class="course-info"><span class="price">&yen;{{item.course_price}}</span><span class="time">{{_getCourseTime(item.duration)}}课时</span></p>
          </div>
        </li>
      </ul>
    </div>
    <!--分页-->
    <div class="page" v-show="allpage>1">
      <ul class="pagination" >
        <li v-if="thisPage!= 1" @click="thisPage-- && goto(thisPage)" >上一页</li>
        <li v-else>上一页</li>
        <li v-for="index in pages" @click="goto(index)" :class="{'active':thisPage == index}" :key="index">
          {{index}}
        </li>
        <li  v-if="allpage != thisPage && allpage != 0 "@click="thisPage++ && goto(thisPage++)">下一页</li>
        <li v-else>下一页</li>
      </ul>
    </div>
    <m-footer :active="true"></m-footer>
  </div>
</template>

<script>
  import MHeader from  'components/m-header/m-header'
  import MFooter from  'components/m-footer/m-footer'
  import Scroll from 'base/scroll/scroll'
  import BScroll from 'better-scroll';
  import {courseCategories,allCourses,courseCategoryCourses} from 'api/courses'
  import {getCourseTime} from "common/methods"
  export default {
    name: "course",
    data(){
      return{
        courseType:[],
        courseContent:[],
        isAllCourse:true,
        showItem:5,
        allpage:"",
        thisPage:1,
        thisLi:-1,
        typeId:""
      }
    },
    components:{
      Scroll,
      MHeader,
      MFooter
    },
    computed:{
      pages:function(){
        var pag = [];
        if( this.thisPage < this.showItem ){ //如果当前的激活的项 小于要显示的条数
          //总页数和要显示的条数那个大就显示多少条
          var i = Math.min(this.showItem,this.allpage);
          while(i){
            pag.unshift(i--);
          }
        }else{ //当前页数大于显示页数了
          var middle = this.thisPage - Math.floor(this.showItem / 2 ),//从哪里开始
            i = this.showItem;
          if( middle >  (this.allpage - this.showItem)  ){
            middle = (this.allpage - this.showItem) + 1
          }
          while(i--){
            pag.push( middle++ );
          }
        }
        return pag
      }
    },
    mounted(){
      this._courseCategories()
      this._allCourses()
      //alert(getCourseTime)
    },
    methods:{
      _getCourseTime(seconds) {
        return getCourseTime(seconds);
      },
      //课程分类
      _courseCategories(){
        let that=this
        courseCategories(function(res){
          if(res != null && res.status == 200) {
            that.courseType = res.data
          }
        })
      },
      //全部课程
      _allCourses(){
        let that=this
        allCourses("",this.thisPage,function(res){
          if(res != null && res.status == 200) {
            that.allpage = Math.ceil(res.data.total / 5)
            that.courseContent = res.data.list
          }
        })
      },
      _courseCategoryCourses(typeId,index){
        let that=this
        this.typeId=typeId
        courseCategoryCourses(typeId, '', this.thisPage, function (res) {
          if(res != null && res.status == 200) {
          that.allpage = Math.ceil(res.data.total / 5)
          that.courseContent = res.data.list
            //console.log(that.courseContent)
          }
        })
      },
      toggle(typeId,index){
        this.isAllCourse=false
        this.thisPage=1
        this.thisLi=index
        this.typeId=typeId
        this._courseCategoryCourses(this.typeId,"",this.thisPage)
      },
      goto:function(index){
        //if(index == this.thisPage) return;
        this.thisPage = index;
        if(this.isAllCourse){
          this._allCourses("",this.thisPage)
        }else{
          this._courseCategoryCourses(this.typeId,"",this.thisPage)
        }
      },
       getAll(){
          this.thisType=""
          this.thisPage =1
          this.isAllCourse=true
          this.thisLi=-1
          this._allCourses("",this.thisPage)
       }
    }
  }
</script>

<style scoped lang="scss">
  @import "static/scss/_variable";
  .scroll-content{
    border-bottom: $box-line;/*no*/
    overflow: hidden;
    width:100%;
    .nav{
      padding-left:40px;
      width:140%;
      li{
        float:left;
        color:#666;
        font-size:$font-size-large;
        padding-right:40px;
        line-height:75px;
        &.this-li{
          a{
            font-size:$font-size-large-x;
            color:$btn-background-color;
          }
        }
        &:last-child{
          padding:0;
        }
      }
      &:after{
        content:"";
        height:0;
        line-height:0;
        display:block;
        visibility:hidden;
        clear:both;
      }
    }
  }
  .course-list{
    margin:37px 15px;
    .course-item{
      display: flex;
      flex-direction: row;
      padding: 13px 17px;
      padding-right:0;
      border: $box-line;/*no*/
      margin-bottom: $normal-size;
      .left-box{
        position:relative;
        margin-right:30px;
        img{
          width:260px;
          height:170px;
        }
      }
      .right-box{
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        margin-right:15px;
        p{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        p.course-title{
          color:$type-color;
          font-size:$font-size-large;
          line-height:35px;
        }
        p.course-text{
          color:$text-color;
          font-size:$font-size-medium;
          line-height: $element-distance;
          height:58px;
        }
        p.course-info{
          display: flex;
          flex-direction: row;
          justify-content:  space-between;
          .price{
            color:$btn-background-color;
            font-size:$font-size-large;
          }
          .time{
            color:#666;
            font-size:$font-size-medium-x;
          }
        }
      }
    }
  }
  .course-text p:nth-child(2){
   display:none;
  }
  .page{
    bottom:$footer-height;
    width:600px;
    margin:40px $normal-size;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ul{
      display:flex;
      flex-direction: row;
    }
    li{
      border:$box-line;/*no*/
      border-radius: 5px;
      background:#f5f5f5;
      color:#999;
      font-size:$font-size-large;
      width:43px;
      height:39px;
      line-height:40px;
      margin-right:27px;
      text-align: center;
      &:last-child,&:first-child{
        width:100px;
        height:39px;
      }
      &:last-child{
        margin-right: 0;
      }
    }
    a{
      text-decoration:none;
    }
    .pagination li.active{
      background:$btn-background-color;
      color:#fff;
      border:1px solid $btn-background-color;
    }
  }
  .none{
    line-height:$footer-height;
    text-align: center;
    color:$type-color;
    font-size:$font-size-large;
  }
</style>
