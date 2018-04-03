<template>
  <div class="join">
      <div class="join-box">
        <div class="box-left">
          <img src="/static/images/position.png" alt="">
          <span>程序员</span>
        </div>
        <div class="box-right">
          <div class="first">
            <p>【岗位职责】:</p>
            <p>1.负责网站前端开发和性能优化。</p>
            <p>2.负责前端架构建设及公共组件的设计开发。</p>
            <p>3.负责后台系统的前端开发及维护。</p>
            <p>4.从事过web网站、H5平台，两端的实际切图工作。</p>
          </div>
          <div>
            <p>【任职要求】:</p>
            <p>1.计算机科学或相关专业毕业，拥有扎实的计算机基础理论知识；</p>
            <p>2.年以上工作经验，精通前端开发技术（HTML/CSS/JS）；</p>
            <p>3.熟悉MV*框架，至少精通一种（Vue/React/AngularJS），并有相关经验；</p>
            <p>4.至少熟悉一种开发语言（PHP/Java/C++/python/nodejs等）</p>
            <p>5.具有一定的软件工程意识，对数据结构和算法设计有充分理解；</p>
            <p>6.有前端性能优化经验。</p>
            <p class="email">邮箱：hr@dfjrcap.com</p>
            <p>工作地址： 北京市西城区金融大街27号投资广场B座21层</p>
          </div>
        </div>
      </div>
    <div class="join-box">
      <div class="box-left">
        <img src="/static/images/position.png" alt="">
        <span>金融助理研究员</span>
      </div>
      <div class="box-right">
        <div>
          <p>【任职要求】:</p>
          <p>1、金融学、经济学等经济金融类相关专业，本科及以上学历； </p>
          <p>2、有上进心和责任心，逻辑清晰、思维敏捷、表达能力较强；</p>
          <p>3、能熟练使用Office软件，且必须具备出色的PPT制作能力；</p>
          <p>4、具备沉稳、严谨的工作态度，热爱并有志于长期从事研究工作者优先；</p>
          <p>5、英语听、说、读、写能力突出，熟练掌握中英互译，金融英语专业优先考虑；</p>
          <p>6、能熟练使用SAS，EXCEL,SPSS及Eviews等进行数据分析者优先考虑；</p>
          <p>7、拥有注册会计师、注册税务师、CFC、CFA资格者优先考虑。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "join"
    }
</script>

<style scoped lang="scss">
  @import "static/scss/_variable";
  .join{
    padding:36px 26px;
    .join-box{
      border:$box-line;
      display: flex;
      flex-direction: row;
      padding:35px 0;
      .box-left{
        border-right: $box-dotted-line;
        display: flex;
        flex-direction: column;
        width:130px;
        justify-content: center;
        text-align: center;
        img{
          width:60px;
          height:45px;
          align-self:center;
        }
        span{
          color:$type-color;
          font-size:$font-size-normal;
          margin-top: $normal-size;
          line-height: 35px;
        }
      }
      .box-right{
        .first{
          border-bottom: $box-line;
          padding-bottom:20px;
          margin-bottom: 20px;
        }
        div{
          padding-left:$normal-size;
          font-size: $font-size-normal;
          line-height: 35px;
          color:#555;
        }
        .email{
          margin-top:$element-distance;
        }
      }
    }
    & div.join-box:nth-child(1){
      margin-bottom: $element-distance;
    }
  }
</style>
