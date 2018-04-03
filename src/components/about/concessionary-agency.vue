<template>

  <div class="concessionary-angency">
    <ul class="overflow">
      <li class="left" v-for="(item,index) in concessionary" :key="index">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {Concessionary} from "common/about"
  export default {
    name: "concessionary-angency",
    data(){
      return {
        concessionary:Concessionary
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "static/scss/_variable";
  .concessionary-angency{
    padding:$element-distance 28px;
    padding-bottom: 0;
    li{
      width:$item-width-x;
      margin-right: $element-distance;
      margin-bottom: 15px;
      &:nth-child(2n){
        margin-right: 0;
      }
      img{
        width: 100%;
        height:132px;
      }
      p{
        line-height: 40px;
        color:$type-color;
        font-size:$font-size-normal;
        display:block;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
      }
    }
  }
</style>
