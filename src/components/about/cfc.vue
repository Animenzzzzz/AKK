<template>
  <div class="cfc">
    CFC秘书处全称：公司金融国际职业资格认证执行委员会秘书处（中国）。
    在公司金融国际职业资格认证执行委员会和公司金融国际标准委员会指导下开展工
    作。负责CFC项目在中国大陆的培训、认证的组织协调工作；负责与ICMA、雷丁大
    学等外方合作机构以及中国金融教育发展基金会、清华大学五道口金融学院等中方
    合作机构的协调、沟通工作。具体实施执行委员会的日常工作，常设机构设在中国
    国家发改委培训中心公司金融国际合作项目办公室。
  </div>
</template>

<script>
  import MHeader from  'components/m-header/m-header'
  import MFooter from  'components/m-footer/m-footer'
  import Scroll from 'base/scroll/scroll'
  import BScroll from 'better-scroll';
  import {newsCenter} from 'api/home'
  import {newsTypeAll} from 'common/constants'
  export default {
    name: "cfc"
  }
</script>

<style scoped lang="scss">
  @import "static/scss/_variable";
  .cfc{
    margin:$element-distance  $normal-size;
    font-size:$font-size-large;
    color:$type-color;
    line-height: 40px;
    text-align:justify;
  }
</style>
