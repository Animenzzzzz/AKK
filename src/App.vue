<template>
  <div id="app">
    <m-header></m-header>
    <navigation ></navigation>
    <div class="content"><router-view></router-view>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
  import MHeader from  'components/m-header/m-header'
  import MFooter from  'components/m-footer/m-footer'
  import 	Navigation from  'components/navigation/navigation'
  import {news,marketing,newDetail,newsCenter} from 'api/home'
  import {changePassword,login,register,logout,updateInfo,sendRegisterCode,sendResetPasswordCode,validateCode,sendChangeContactCode,updateContact,resetPwd,collectionList,myCourses} from 'api/userinfo'
  import {allCourses,courseCategories,courseCategory,courseCategoryCourses,courseDetail,coursePrivate,courseChapters,teachers,lecturers} from 'api/courses'
  import {orders,records} from 'api/order'

  // import {mapMutations,mapGetters} from 'vuex'
  export default {
    name: 'App',
    components:{
      MHeader,
      MFooter,
      Navigation
    },
    //created(){
      //console.log(this.setUserinfo)
   // },
    computed:{
     /* ...mapGetters([
        'setUserinfo'
      ])*/
    },
    mounted() {
      //this.getData()
      //this._news()
      /*this._marketing()
      this._newDetail()*/
      //this._sendRegisterCode()
      //this._sendResetPasswordCode()
      //this._updateContact()
      //this._changePassword()
      //this._resetPwd()
        //this._login()
      //this._register()
      //this._logout()
      //this._updateInfo()
      //this._allCourses()
      //this._courseCategories()
      //this._courseCategory()
        // this._courseCategoryCourses()
        //this._courseDetail()
     // this._coursePrivate()
      //this._courseChapters()
      //this._teachers()
     // this._lecturers()
     // this._register()
     //this._getUserInfo()
      //this._newsCenter()
        //this._sendChangeContactCode()
      //this._collectionList()
      //this._myCourses()
      //this._orders()
      //this._records()
    },
    methods: {
      _news(){
        news(function (res) {
          console.log(res)
        })
      },
      _newsCenter(){
        newsCenter("10","","2",function(res){
          console.log(res)
        })
      },
      _marketing(){
        marketing(function (res) {
          console.log(res)
        })
      },
      _newDetail(){
        newDetail("6366970133998469120",function (res) {
          console.log(res)
        })
      },
      _logout(){
        logout(function(res){
          console.log(res)
        })
      },
      _register(){
        register("woooyxy","123456","510987679@qq.com","123456",function(res){
          console.log(res)
        })
      },
      _sendRegisterCode(){
        sendRegisterCode("510987679@qq.com",function(res){
          console.log(res)
        })
      },
      _sendResetPasswordCode(){
        sendResetPasswordCode("15632031298",function(res){
          console.log(res)
        })
      },
      _validateCode(){
        validateCode("","",function(res){
          console.log(res)
        })
      },
      _sendChangeContactCode(){
        sendChangeContactCode("",function(res){
          console.log(res)
        })
      },
      _updateContact(){ //密码 手机/邮箱 验证码
        updateContact("123456","15632031298","1235",function(res){
          console.log(res)
        })
      },
      _updateInfo(){ //昵称 性别 生日 地址
        updateInfo("王孟科","2","1990-12-21","北京-北京-东城区",function(res) {
          console.log(res)
        })
      },
      _changePassword(){
        changePassword("123456","123456",function (res) {
          console.log(res)
        })
      },
      _resetPwd(){
        resetPwd("","","",function(res){
          console.log(res)
        })
      },
      _login(){
        login("15738839318","938541",true,function (res) {
          console.log(res)
        })
      },
      _allCourses(){
        allCourses("","1",function(res){
          console.log(res)
        })
      },
      _courseCategories(){
        courseCategories(function(res){
          console.log(res)
        })
      },
      _courseCategory(){
        courseCategory("662",function(res){
          console.log(res)
        })
      },
      _courseCategoryCourses(){
        courseCategoryCourses("6116482194706792524","","",function(res){
          console.log(res)
        })
      },
      _courseDetail(){
        courseDetail("6523",function(res){
          console.log(res)
        })
      },
      _coursePrivate(){
        coursePrivate("6523",function(res){
          console.log(res)
        })
      },
      _courseChapters(){
        courseChapters("6523",function(res){
          console.log(res)
        })
      },
      _teachers(){
        teachers("","",function(res){  //第一个参数是每页数量，第二个是页码
          console.log(res)
        })
      },
      _lecturers(){
        lecturers("164",function(res){ //讲师的id
          console.log(res)
        })
      },
      _getUserInfo(){
        getUserInfo(function (res) {
          console.log(res)
        })
      },
      _collectionList(){
        collectionList(function(res){
          console.log(res)
        })
      },
      _myCourses(){
        myCourses(function(res){
          console.log(res)
        })
      },
      _orders(){
        orders(function(res){
          console.log(res)
        })
      },
      _records(){
        records(function(res){
          console.log(res)
        })
      }

    /*  ...mapMutations({
        setUserinfo: 'SET_USERINFO'
      })*/
    }
  }
</script>

<style lang="scss">
  @import "static/scss/_variable";
  .content{
    width:10rem;
    margin:0 auto;
    margin-top:$header-height;
    padding-bottom: $footer-height;
  }
</style>
