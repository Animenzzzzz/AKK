<template>
  <div class="news">
    <m-header :active="true"></m-header>
    <scroll class="scroll-content" data="newsType">
        <ul class="nav" >
          <li v-for="(item,index) in newsType" @click="getNews(item.type,index)" :class="index!=thisLi? thisliKey:'thisli'" >
            <a>{{item.name}}</a>
          </li>
        </ul>
    </scroll>
    <div>
      <p v-if="newsContent==''" class="none">暂无新闻</p>
      <ul class="news-list">
        <router-link tag="li" class="news-item" v-for="(item,index) in newsContent" :key="index" :id="item.id" :to="{path: '/news/'+item.id}">
          <div class="left-box">
            <img :src="item.photo_uri" alt="">
            <span class="news-date">{{item.created_time.split(" ")[0]}}</span>
          </div>
          <div class="right-box">
            <p class="news-title" style="-webkit-box-orient: vertical">{{item.title}}</p>
            <p class="news-text" style="-webkit-box-orient: vertical">{{item.summary}}</p>
          </div>
        </router-link>
      </ul>
    </div>
    <!--分页-->
    <div class="page" v-show="allpage>1">
      <ul class="pagination" >
        <li v-if="thisPage!= 1" @click="thisPage-- && goto(thisPage,'prev')" >上一页</li>
        <li v-else>上一页</li>
        <li v-for="index in pages" @click="goto(index)" :class="{'active':thisPage == index}" :key="index">
          {{index}}
        </li>
        <li  v-if="allpage != thisPage && allpage != 0 "@click="thisPage++ && goto(thisPage++,'next')">下一页</li>
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
  import {newsCenter} from 'api/home'
  import {newsTypeAll} from 'common/constants'
  export default {
    name: "news",
    data(){
      return{
        newsType:newsTypeAll,
        newsContent:[],
        thisLi:0,
        thisliKey:true,
        showItem:5,
        allpage:"",
        thisType:"",
        thisPage:1
      }
    },
    mounted(){
      this._newsCenter(this.thisType,"",this.thisPage)
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
    methods:{
      getNews(type,index){
        this.thisPage=1
        this.thisLi=index
        if(type==-1){
          this.thisType=""
        }else{
          this.thisType=type
        }
        this._newsCenter(this.thisType,"",this.thisPage)
      },
      //新闻中心
      _newsCenter(){
        var that=this
        newsCenter(this.thisType,"",this.thisPage,function(res){
          if(res != null && res.status == 200){
            //type,per_page,page 类型 每页几条数据 第几页
            that.newsContent=res.data.list
            that.allpage=Math.ceil(res.data.total/7)
          }
        })
      },
      goto:function(index,btnType){
          //if(index == this.thisPage) return;
          this.thisPage = index;
          this._newsCenter(this.thisType,"",this.thisPage)
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
      width:110%;
      li{
        float:left;
        color:#666;
        font-size:$font-size-large;
        padding-right:40px;
        line-height:75px;
        &.thisli{
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
  .news-list{
    margin:37px $normal-size;
    .news-item{
      display: flex;
      flex-direction: row;
      padding-bottom: $normal-size;
      border-bottom: $box-line;/*no*/
      margin-bottom: $normal-size;
      .left-box{
        position:relative;
        margin-right:30px;
        img{
          width:210px;
          height:140px;
        }
        .news-date{
          position: absolute;
          bottom:0;
          width:100%;
          background: $background-opacity;
          height:40px;
          line-height: 40px;
          text-align: center;
          color:$nav-active-color;
          font-size: $font-size-normal;
        }
      }
      .right-box{
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        p.news-title{
          color:$type-color;
          font-size:$normal-size;
          line-height:35px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        p.news-text{
          color:$text-color;
          font-size:$font-size-medium;
          line-height: $element-distance;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
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
