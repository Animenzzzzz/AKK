<template>
     <div class="member-center">
          <div class="member-top">
            <MemberHeader :active="true"></MemberHeader>
            <div class="member-banner">
                <div class="member-info">
                  <img src="/static/images/teacher.jpg" alt="" class="user-via">
                </div>
                <p class="user-grate">学员</p>
                <p class="user-name">SARAH</p>
            </div>
          </div>
          <div class="member-bottom">
              <ul class="member-list">
                <!--<li @click="ShowPersonalSett" v-for="item in items">-->
                  <!--<span class="itemName">{{item.PerSett}}</span>-->
                  <!--<span class="ico">-->
                    <!--<img src="/static/images/chose.png" alt="">-->
                  <!--</span>-->
                <!--</li>-->
                <li @click="ShowPersonalSett">
                  <span class="itemName">个人设置</span>
                  <span class="ico">
                      <img src="/static/images/chose.png" alt="">
                  </span>
                  <div class="ItemBox" v-show="PerSettShow">
                    <ul class="ItemDetails">
                      <li v-for="details in itemOne">
                        <span>{{details.title}}</span>
                        <span class="ico">
                            <img src="/static/images/chose.png" alt="">
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li @click="ShowStudy">
                  <span class="itemName">我的学习</span>
                  <span class="ico">
                      <img src="/static/images/chose.png" alt="">
                  </span>
                  <div class="ItemBox" v-show="MyStudy">
                    <ul class="ItemDetails">
                      <li v-for="details in itemTwo">
                        <span>{{details.title}}</span>
                        <span class="ico">
                            <img src="/static/images/chose.png" alt="">
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li @click="ShowPayRec">
                  <span class="itemName">支付记录</span>
                  <span class="ico">
                      <img src="/static/images/chose.png" alt="">
                  </span>
                  <div class="ItemBox" v-show="PayRecord">
                    <ul class="ItemDetails">
                      <li v-for="details in itemThree">
                        <span>{{details.title}}</span>
                        <span class="ico">
                            <img src="/static/images/chose.png" alt="">
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li @click="ShowExamin">
                  <span class="itemName">我的考试</span>
                  <span class="ico">
                      <img src="chose/static/images/.png" alt="">
                  </span>
                  <div class="ItemBox" v-show="MyExamin">
                    <ul class="ItemDetails">
                      <li v-for="details in itemFour">
                        <span>{{details.title}}</span>
                        <span class="ico">
                            <img src="/static/images/chose.png" alt="">
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li @click="ShowMessnot">
                  <span class="itemName">消息通知</span>
                  <span class="ico">
                      <img src="/static/images/chose.png" alt="">
                  </span>
                  <div class="ItemBox" v-show="Messnotifica">
                    <ul class="ItemDetails">
                      <li v-for="details in itemFive">
                        <span>{{details.title}}</span>
                        <span class="ico">
                            <img src="/static/images/chose.png" alt="">
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div class="ExitLogin">
                  <span>退出登录</span>
              </div>
          </div>
     </div>
</template>
<script>
      import MemberHeader from "components/m-header/m-header";
      import bus from 'components/bus/bus';
      import {itemOne,itemTwo,itemThree,itemFour,itemFive} from 'common/member';
      export default{
          name:"member-center",
          components:{
              MemberHeader,
          },
          data(){
              return{
                    PerSettShow:false,
                    MyStudy:false,
                    PayRecord:false,
                    MyExamin:false,
                    Messnotifica:false,
                    itemOne:itemOne,
                    itemTwo:itemTwo,
                    itemThree:itemThree,
                    itemFour:itemFour,
                    itemFive:itemFive
//                  items:[
//                    {PerSett:"个人设置"},
//                    {PerSett:"我的学习"},
//                    {PerSett:"支付记录"},
//                    {PerSett:"我的考试"},
//                    {PerSett:"消息通知"}
//                  ]
              }
          },
          methods:{
            ShowPersonalSett(){
              this.PerSettShow = !this.PerSettShow;
            },
            ShowStudy(){
              this.MyStudy = !this.MyStudy;
            },
            ShowPayRec(){
              this.PayRecord = !this.PayRecord;
            },
            ShowExamin(){
              this.MyExamin = !this.MyExamin;
            },
            ShowMessnot(){
              this.Messnotifica = !this.Messnotifica;
            }
          }
      }
</script>
<style scoped lang="scss">
  @import "static/scss/_variable";
.member-center{
  background: #f8f8f8;
  width:100%;
  min-height:100%;
  .member-top{
  width:100%;
  .member-banner{
    width:100%;
    height:286px;
    padding-top: 36px;
    text-align: center;
    background: url(/static/images/center-bg.jpg) no-repeat;
    -webkit-background-size:100% 100%;
    background-size:100% 100%;
    .member-info{
      width:134px;
      height:134px;
      margin: 0 auto;
      img{
        display: inline-block;
        width:100%;
        height:100%;
        -webkit-border-radius:50%;
        -moz-border-radius:50%;
        border-radius:50%;
      }
    }
    .user-grate,.user-name{
      font-size:28px;
      margin-top:16px;
      color: #fff;
    }
    .user-name{
      font-size:26px;
    }
  }
}
  .member-bottom{
    width:100%;
    height:100%;
    .member-list {
      width: 100%;
      background: #f8f8f8;

      >li {
        width: 100%;
        line-height: 76px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        background: #fff;
        margin-top: 12px;
        .itemName {
          color: #333;
          font-size: 26px;
          margin-left: 26px;
        }
        .icoBox{
          width:100%;
          height:100%;
        }
        .ico {
          display: inline-block;
          width: 12px;
          height: 24px;
          float: right;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }

    }
    .ExitLogin{
      height:76px;
      line-height:76px;
      text-align: center;
      color: #ee8452;
      font-size:26px;
      margin-top:48px;
      background: #fff;
      border-top:1px solid #eee;
      border-bottom:1px solid #eee;
    }
    .ItemDetails{
      width: 100%;
      >li{
        line-height: 76px;
        font-size:26px;
        color: #666;
        padding-left:52px;
        border-top:1px solid #eee;
        .ico {
          display: inline-block;
          width: 12px;
          height: 24px;
          float: right;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
