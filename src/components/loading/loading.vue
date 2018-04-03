<template>
  <div class="loading">
    <img src="static/images/loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "static/scss/_variable";
  .loading{
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    overflow: hidden;
    right:0;
    img{
      width:60px;
      height:60px;
      margin: 0 auto;
      position: fixed;
      z-index: 100;
      top: 50%;
      left: 50%;
      margin-left: -30px;
      margin-top:-30px;
    }
  }
</style>
