<template>
  <div class="lecturer-detail">
    <m-header :active="true"></m-header>
    <div class="lecturer-detail-box" :data-id="lecturerDetail.id">
      <img class="img" :src="lecturerDetail.lecturer_avatar" alt="">
      <p class="name">{{lecturerDetail.lecturer_name}}</p>
      <div class="detail" v-html="lecturerDetail.lecturer_introduction"></div>
    </div>
    <m-footer :active="true"></m-footer>
  </div>
</template>

<script>
  import MHeader from  'components/m-header/m-header'
  import MFooter from  'components/m-footer/m-footer'
  import {lecturers} from 'api/courses'
    export default {
        name: "lecturer-detail",
        components:{
          MHeader,
          MFooter
        },
        data(){
          return {
            lecturerDetail:""
          }
        },
        mounted(){
          this._lecturers()
        },
        methods:{
          _lecturers(){
            let that=this
            lecturers(this.$route.params.id,function (res) {
              if(res != null && res.status == 200){
                that.lecturerDetail=res.data
              }
            })
          }
        }
    }
</script>

<style lang="scss">
  @import "static/scss/_variable";
  .lecturer-detail-box{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:0 28px;
    .img{
      width:230px;
      height:249px;
      text-align: center;
      margin-top:50px;
    }
    .name{
      font-size:$font-size-large-x;
      color:$type-color;
      line-height: 70px;
    }
    .detail  p{
        color:$type-color;
        font-size:$font-size-normal;
        line-height: 40px;
        text-align:justify;
        text-indent:42px;
    }
  }
</style>
