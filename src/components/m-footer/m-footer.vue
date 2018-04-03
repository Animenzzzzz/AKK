<template>
    <div class="m-footer" v-if="active">
      <p class="text">版权 {{copyright}}</p>
      <p class="text">邮箱：{{email}}|电话：{{phone}}</p>
    </div>
</template>

<script>
    export default {
        name: "m-footer",
        props: ['active'],
        data(){
            return{
              copyright:'由北京东方金融教育所有',
              email:'jingrongjiaoyu@dfjrcap.cpm',
              phone:'010-66083079-809'
          }
        }
    }
</script>

<style scoped lang="scss">
  @import "static/scss/_variable";
  .m-footer{
    width: 100%;
    bottom:0;
    left:0;
    height:$footer-height;
    background: $item-color;
    text-align: center;
    position:absolute;
    bottom:0;
  }
  .text{
    color:$footer-text-color;
    font-size: $font-size-large;/*px*/
    line-height: 42px;
  }
  .text:nth-child(1){
    padding-top:12px;
  }
  .line{
    margin:0 5px;
  }
</style>
