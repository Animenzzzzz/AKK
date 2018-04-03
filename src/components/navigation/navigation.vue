<template>
  <div class="navigation" @click.self="tiggle" v-show="show">
    <div class="nav-content">
      <div class="login-block">
        <div>
          <p class="avatar">
            <img src="/static/images/default-avatar.png" alt="">
          </p>
          <p class="status" >登录</p>
        </div>
      </div>
      <ul class="first-ul">
        <!--首页-->
        <router-link tag="li" v-for="(item,index) in navList1" :to="item.linkTo" :key="item.title">
          <p class="overflow" @click="tiggle">
            <span class="text left">{{item.title}}</span>
            <span class="point right"></span>
          </p>
        </router-link>
        <!--公司金融顾问-->
        <li @click="showIntroduceItem">
          <p class="overflow">
            <span class="text left">公司金融顾问</span>
            <span v-show="!introduceItem"class="point right"></span>
            <span v-show="introduceItem " class="right x-close">X</span>
          </p>
          <ul class="second-ul" v-show="introduceItem">
            <router-link tag="li" v-for="(item,index) in navList2" class="flexli" :to="item.linkTo" :key="index">
              <span class="text">>{{item.title}}</span>
              <span class="point"></span>
            </router-link>
          </ul>
        </li>
        <!--认证考试-->
        <li @click="showIdentifyItem">
          <p class="overflow">
            <span class="text left">认证考试</span>
            <span v-show="!certifiesItem"class="point right"></span>
            <span v-show="certifiesItem " class="right x-close">X</span>
          </p>
          <ul class="second-ul" v-show="certifiesItem">
            <router-link tag="li" v-for="(item,index) in navList3" class="flexli" :to="item.linkTo" :key="index">
              <span class="text">>{{item.title}}</span>
              <span class="point"></span>
            </router-link>
          </ul>
        </li>
        <!--持续教育、金牌讲师-->
        <router-link tag="li" v-for="(item,index) in navList4" :to="item.linkTo" :key="index">
          <p class="overflow" @click="tiggle">
            <span class="text left">{{item.title}}</span>
            <span class="point right"></span>
          </p>
        </router-link>
        <li @click="showAboutItem">
          <p class="overflow">
            <span class="text left">关于我们</span>
            <span v-show="!aboutItem"class="point right"></span>
            <span v-show="aboutItem " class="right x-close">X</span>
          </p>
          <ul class="second-ul" v-show="aboutItem">
            <router-link tag="li" v-for="(item,index) in navList5" class="flexli" :to="item.linkTo" :key="index">
              <span class="text">>{{item.title}}</span>
              <span class="point"></span>
            </router-link>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import bus from 'components/bus/bus'
  import {navList1,navList2,navList3,navList4,navList5} from 'common/navigation'
  export default {
    name: "navigation",
    created() {
      bus.$on('eventName',(e)=>{
        this.show = e
      })
    },
    data() {
      return {
        show: false,
        aboutItem:false,
        introduceItem:false,
        certifiesItem:false,
        navList1:navList1,
        navList2:navList2,
        navList3:navList3,
        navList4:navList4,
        navList5:navList5
      }
    },
    watch:{
      "$route": "changeShow"
    },
    methods: {
      tiggle() {
        this.show = false
      },
      showIntroduceItem(){
        this.certifiesItem=false
        this.aboutItem=false
        this.introduceItem=!this.introduceItem
      },
      showIdentifyItem(){
        this.introduceItem=false
        this.aboutItem=false
        this.certifiesItem=!this.certifiesItem
      },
      showAboutItem(){
        this.introduceItem=false
        this.certifiesItem=false
        this.aboutItem=!this.aboutItem
      },
      changeShow(){
        this.show=false;
        let path = this.$route.path;
        if(path=='/about/cfc' ||path== '/about/cooperation-agency' ||path== '/about/concessionary-agency' ||path== '/about/contact'||path== '/about/join') {
          this.aboutItem=true
          this.introduceItem=false
          this.certifiesItem=false
        }else{
          this.aboutItem=false
        }
        if(path=='/certifies/cfcc-certifies' ||path== '/certifies/cfc-certifies' ) {
          this.aboutItem=false
          this.introduceItem=false
          this.certifiesItem=true
        }else{
          this.certifiesItem=false
        }
        if(path=='/introduce/cfcc-introduce' ||path== '/introduce/cfc-introduce' ) {
          this.aboutItem=false
          this.introduceItem=true
          this.certifiesItem=false
        }else{
          this.introduceItem=false
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "static/scss/_variable";

  .navigation {
    width: 10rem;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    z-index: 100;
    .nav-content {
      width: 400px;
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      background: $nav-background-color;
      .login-block {
        background: url("/static/images/login-bg.jpg") no-repeat 0 0;
        background-size: 100% 100%;
        width: 100%;
        height: 316px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #485473; /*no*/
        .avatar {
          width: 134px;
          height: 134px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 134px;
            height: 134px;
          }
        }
        .status {
          font-size: $font-size-large-x;
          color: $nav-active-color;
          text-align: center;
          line-height: 55px;
        }
      }
      li {
        &.router-link-active {
          .text {
            color: $nav-active-color;
          }
          .point {
            background: #ff7745;
          }
        }
      }
      .first-ul {
        margin: 20px 56px;
        li {
          line-height: 57px;
          p, .flexli {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
        .text {
          color: $nav-color;
          font-size: $font-size-large-x;
        }
        .point {
          display: inline-block;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: $nav-color;
        }
      }
      .second-ul .text{
        font-size: $font-size-large;
      }
      .x-close{
        font-size:  $font-size-small;
        color:$nav-color;
        font-weight: 600;
      }
    }
  }
</style>
