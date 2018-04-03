<template>
  <div class="about">
    <m-header :active="true"></m-header>
    <scroll class="scroll-content" data="aboutType">
      <ul class="nav" >
        <router-link tag="li" :to="item.linkTo" v-for="(item,index) in aboutType" :key="index">
         {{item.title}}
        </router-link>
      </ul>
    </scroll>
    <router-view></router-view>
    <m-footer :active="true"></m-footer>
  </div>
</template>

<script>
  import MHeader from  'components/m-header/m-header'
  import MFooter from  'components/m-footer/m-footer'
  import Scroll from 'base/scroll/scroll'
  import BScroll from 'better-scroll'
  import {navigationList} from 'common/constants'
  export default {
    name: "cfc",
    data(){
      return{
        aboutType: [
          {
            title: "CFC秘书处",
            linkTo: 'cfc'
          },
          {
            title: "合作机构",
            linkTo: 'cooperation-agency'
          },
          {
            title: "特许机构",
            linkTo: 'concessionary-agency'
          },
          {
            title: "联系我们",
            linkTo: 'contact'
          },
          {
            title: "加入我们",
            linkTo: 'join'
          }
        ]
      }
    },
    mounted(){
    },
    components:{
      Scroll,
      MHeader,
      MFooter
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
        &.router-link-active{
            font-size:$font-size-large-x;
            color:$btn-background-color;
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
</style>
