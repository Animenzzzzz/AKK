import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import axios from 'axios'
import Mint from 'mint-ui'
import 'lib-flexible'
import store from './store'


import 'mint-ui/lib/style.css'
import 'static/scss/_my-mint.scss'//全局修改mint-UI样式
import 'static/scss/common.scss'
Vue.prototype.$axios = axios
fastclick.attach(document.body)  // 阻止点击事件延迟
Vue.config.productionTip = false
Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

window.cfc = {
  isLogin:false,
  userInfo:{},
  avatar:'/static/images/default-avatar.png',
}
