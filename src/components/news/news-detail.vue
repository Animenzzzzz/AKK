<template>
  <div class="news-detail">
    <m-header :active="true"></m-header>
    <p class="news-title">{{newsDetail.title}}</p>
    <p class="news-info">
      <span class="time">{{newsDetail.created_time}}</span>
      <span>作者：{{newsDetail.author}}</span>
    </p>
    <div class="news-content" v-html="newsDetail.content"></div>
    <m-footer :active="true"></m-footer>
  </div>
</template>

<script>
    import MHeader from  'components/m-header/m-header'
    import MFooter from  'components/m-footer/m-footer'
    import {newDetail} from 'api/home'
    export default {
        name: "news-detail",
        data(){
          return {
            newsDetail:""
          }
        },
      components:{
        MHeader,
        MFooter
      },
        mounted(){
          this._newDetail()
          //console.log(this.$route.params.id)
        },
       methods:{
         _newDetail(){
           let that=this
           newDetail(this.$route.params.id,function (res) {
             if(res != null && res.status == 200){
                that.newsDetail=res.data
              }
           })
         }
       }
    }
</script>

<style lang="scss">
  @import "static/scss/_variable";
  .news-detail{
    padding:$element-distance 25px;
    .news-title{
      text-align: center;
      font-size:$font-size-large;
      color:$type-color;
      line-height: 35px;
    }
    .news-info{
      text-align: right;
      color:#999;
      font-size: $font-size-medium;
      border-bottom: $box-line;
      padding-bottom: $normal-size;
      margin-top:15px;
      margin-bottom:$element-distance;
      .time{
        margin-right:$normal-size;
      }
    }
    .news-content{
      p{
        font-size:$font-size-medium !important;
        line-height: 40px;
      }
      img{
        width:100%;
        margin-top:10px;
      }
    }
  }
</style>
