<template>
  <div>
    <button @click="_login"> 登录</button>
  </div>
</template>
<script>
    import {login} from 'api/userinfo';
    export default {
      methods:{
        _login(){
          login("admin","123456",function (res) {
            alert(res);
            console.log(res)
          });
        }
      }
    }
</script>
