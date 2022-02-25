<template>
    <div class="play">
        <div class="header">
            <div class="title">
                <router-link to="/">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
                <div class="music-info">
                    <p>{{ $route.params.name }}</p>
                </div>
                <router-link to="/search">
                    <i class="iconfont icon-sousuo right"></i>
                </router-link>
            </div>
        </div>
        <div class="song-info">
            <div class="song-info-img">
                <img :src="getUrl" alt />
            </div>
            <div class="iconbox">
                <i class="iconfont icon-shoucang2 left"></i>
                <i class="box"></i>
                <i class="iconfont icon-xiazai right"></i>
            </div>
        </div>
        <div class="song">
            <LRC :id="$route.params.id" :currentTime="currentTime"/>
            <audio ref="player" controls :src="playerData.url"></audio>
        </div>
    </div>
</template>

<script>
import LRC from './LRC.vue'
export default {
  data () {
    return {
      playerData: {},
      currentTime: 0
    }
  },
  components: {
    LRC
  },
  mounted () {
    this.$api.getPlayer({
      id: this.$route.params.id
    })
      .then(res => {
        this.playerData = res.data[0]
        this.addEventHandle()
      })
  },
  beforeDestroy () {
    this.removeEventHandle()
  },
  methods: {
    // 获取音乐播放时间
    addEventHandle () {
      // addEventListener 在音频/视频播放位置发生改变时触发
      this.$refs.player.addEventListener('timeupdate', this.currentTimeHandle)
    },
    removeEventHandle () {
      this.$refs.player.removeEventListener('timeupdate', this.currentTimeHandle)
    },
    currentTimeHandle () {
      // 获取音乐正在播放的时间节点
      // console.log(this.$refs.player.currentTime)
      // 获取音乐总时长
      // console.log(this.$refs.player.duration)
      this.currentTime = this.$refs.player.currentTime
    }
  },
  computed: {
    getUrl () {
    // decodeURIComponent（解码） / recodeURIComponent（转码） 路由转码 传递参数/前后端交互
      return decodeURIComponent(this.$route.params.image)
    }
  }
}
</script>

<style scoped>
.header {
    padding: 15px;
}

.music-info {
    flex: 1;
    font-size: 20px;
}

.title {
    display: flex;
    text-align: center;
}

.left {
    font-size: 30px;
}

.ca {
    color: red;
}

.right {
    font-size: 30px;
}

.song-info {
    padding: 15px;
}

.song-info-img {
    text-align: center;
}

.song-info-img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
    margin-top: 10px;
    min-height: 50px;
}

.iconbox {
    display: flex;
    margin-top: 30px;
}

.iconbox .box {
    flex: 1;
}

.song {
    width: 100%;
    text-align: center;
}

.song audio {
    width: 80%;
}

.active {
    color: #222;
}

.author {
    font-size: 12px;
    color: #999;
}
</style>
