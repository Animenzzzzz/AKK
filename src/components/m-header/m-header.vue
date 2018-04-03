<template>
  <div class="m-header overflow" v-if="active">
    <div class="left left-box">
      <img class="logo" src="/static/images/logo.png" alt="">
      <span class="line"></span>
      <img class="text" src="/static/images/header-text.png" alt="">
    </div>
    <div class="right-box right">
      <router-link v-if="$route.path!=='/index'" tag="img" src="/static/images/home.png" alt=""
                   to="/index"></router-link>
      <img @click="showPanel" src="/static/images/nav-icon.png" alt="">
    </div>
  </div>
</template>
<script>
  import bus from 'components/bus/bus'
  export default {
    props: ['active'],
    data() {
      return {
        panelShow: false
      }
    },
    components: {},
    methods: {
      showPanel() {
        bus.$emit('eventName', true)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "static/scss/_variable";

  .m-header {
    width: 100%;
    height: $header-height;
    line-height: $header-height;
    background: $item-color;
    position: fixed;
    top: 0;
    z-index: 1;
    left: 0;
    .left-box {
      height: 80px;
      margin-left: 16px;
    }
    .right-box {
      margin-right: 16px;
    }
    .logo {
      width: 66px;
      height: 64px;
      margin-top: 8px;
    }
    .line {
      height: 56px;
      width: 1px; /*no*/
      display: inline-block;
      margin: 12px 5px 0px 5px;
      background: #3D4963;
    }
    .text {
      height: 56px;
      width: 56px;
      margin-top: 8px;
    }
    .right-box {
      img {
        width: $icon-size;
        height: $icon-size;
        vertical-align: middle;
        padding: 10px 0 10px 10px;
        &:nth-child(1) {
          margin-right: 10px;
        }
      }
    }
  }
</style>
