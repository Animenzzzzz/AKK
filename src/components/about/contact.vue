<template>
  <div class="contact">
    <ul class="overflow">
      <li class="left" v-for="item in contact">
        <img class="img" :src=item.image alt="">
        <span class="title">{{item.title}}</span>
        <span class="text">{{item.text}}</span>
      </li>
    </ul>
    <p class="map-title">参考地图</p>
    <img class="map-img" src="/static/images/contact-map.png" alt="">
  </div>
</template>

<script>
  import {Contact} from 'common/about'
  export default {
        name: "contact",
        data(){
          return {
            contact:Contact
          }
        }
    }
</script>

<style scoped lang="scss">
  @import "static/scss/_variable";
  .contact{
    margin:0 $content-margin;
    margin-top:36px;
    li{
      text-align: center;
      width:$item-width;
      height:283px;
      border:$box-line;
      margin-bottom:36px;
      margin-right: $content-margin;
      display: flex;
      flex-direction:column ;
      align-items: center;
      &:nth-child(2n){
        margin-right: 0;
      }
      .img{
        width:68px;
        height:62px;
        margin-top:50px;
        margin-bottom: 20px;
      }
      .title{
        line-height:60px;
        color:$type-color;
        font-size: $font-size-large;
      }
      .text{
        margin:0 10px;
        line-height:30px;
        color:#666;
        font-size: $font-size-normal;
      }
    }
    .map-title{
      text-align: center;
      font-size:$font-size-large-x;
      color:$type-color;
      margin:10px;
    }
    .map-img{
      height:344px;
      margin-bottom: $element-distance;
      margin-top:20px;
    }
  }
</style>
