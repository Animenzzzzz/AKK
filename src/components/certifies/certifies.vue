<template>
  <div class="certifies">
    <m-header :active="true"></m-header>
    <router-view></router-view>
    <m-footer :active="true"></m-footer>
  </div>
</template>

<script>
    import MHeader from  'components/m-header/m-header'
    import MFooter from  'components/m-footer/m-footer'
    export default {
        name: "certifies",
        components:{
          MHeader,
          MFooter
        }
    }
</script>

<style scoped>

</style>
