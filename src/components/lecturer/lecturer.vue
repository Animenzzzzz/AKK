<template>
  <div class="lecturer">
    <m-header :active="true"></m-header>
    <div>
      <!--<p v-if="lecturerContent==''" class="none">暂无讲师 </p>-->
      <ul class="lecturer-box overflow">
        <router-link tag="li" class="lecturer-item left" v-for="(item,index) in lecturerContent" :key="index" :data-id="item.id" :to="{path: '/lecturer/'+item.id}">
          <img class="lecturer-img" :src="item.lecturer_avatar" alt="">
          <P class="lecturer-type">{{item.lecturer_name}}</P>
          <p class="lecturer-text">{{item.lecturer_title}}</p>
          <p class="lecturer-text">{{item.lecturer_org}}</p>
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
  import {teachers} from 'api/courses'
  export default {
    name: "lecturer",
    data(){
      return{
        lecturerContent:[],
        showItem:5,
        allpage:"",
        thisPage:1
      }
    },
    mounted(){
      this._lecturer()
    },
    components:{
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
      //新闻中心
      _lecturer(){
        var that=this
        teachers("",this.thisPage,function(res){
          if(res != null && res.status == 200){
            that.lecturerContent=res.data.list
            that.allpage=Math.ceil(res.data.total/7)
          }
        })
      },
      goto:function(index,btnType){
        //if(index == this.thisPage) return;
        this.thisPage = index;
        this._lecturer("",this.thisPage)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "static/scss/_variable";
  .lecturer-box{
    margin:0 28px;
    padding-top:44px;
    .lecturer-item{
      width:$item-width;
      border:$box-line;
      background:$nav-active-color;
      margin-right:$element-distance;
      margin-bottom:$element-distance;
      height:430px;
      .lecturer-img{
        width:230px;
        height:249px;
        display: block;
        margin:19px auto;
      }
      &:nth-child(2n){
        margin-right: 0;
      }
      .lecturer-type{
        padding:16px 0;
        padding-top:0;
        text-align: center;
        color:$type-color;
        font-size:$font-size-large;
      }
      .lecturer-text{
        color:$type-color;
        font-size:$font-size-medium-x;
        text-align: center;
        margin:0 23px;
        line-height:30px;
        margin-bottom: 5px;
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
      margin-right:41px;
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
