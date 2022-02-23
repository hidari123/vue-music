<!--
    智能组件 获取数据
-->
<template>
  <div>
      <music-list-view type='1' title="推荐歌单" :musiclist="recommend"/>
      <music-list-view type='4' title="推荐歌曲" :musiclist="music"/>

  </div>
</template>

<script>
import MusicListView from './MusicListView.vue'
export default {
  name: 'MusicList',
  data () {
    return {
      music: [],
      recommend: []
    }
  },
  components: {
    MusicListView
  },
  created () {
    this.$api.getRecommend().then(res => {
      this.recommend = res.recommend
      console.log(this.recommend)
    })
    this.$api.getMusic().then(res => {
      this.music = res.result
      console.log(this.music)
    })
  }
}
</script>

<style>

</style>
