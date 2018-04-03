<template>
  <div class="video">
    <video :src="url"
           preload="auto"
           controls = "true">

    </video>
  </div>

</template>

<script>
  import {getVideo} from 'api/video'
  export default {
    data(){
      return {
        url:""
      }
    },
    mounted(){
      this._getVideo()
    },
    methods:{
      _getVideo(){
        let that = this
        getVideo("2D7D56AFBA6700DD9C33DC5901307461",function (res) {
          that.url = res.video.copy[0].playurl
          console.log(that.url)
        })
      }
    }
  }
</script>
