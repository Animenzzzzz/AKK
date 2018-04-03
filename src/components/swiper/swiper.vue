<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item , index) in banner" :key="index">
        <img class="bannerImg" :src="item.image" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    import {marketing} from 'api/home'
    import { Swipe, SwipeItem } from 'mint-ui';
    import {adsType} from 'common/constants'
    export default {
        name: "swiper",
        props:["banner"],
        data(){
          return {
          }
        }
    }
</script>

<style scoped lang="scss">
  .swiper{
    height:315px;
    .bannerImg{
      width:100%;
      height:315px;
    }
  }
</style>
