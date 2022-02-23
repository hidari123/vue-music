<!--
    智能组件 获取数据
-->
<template>
  <div>
      <music-list-view title="推荐歌单" :recommend="recommend"/>
      <music-list-view title="推荐歌曲" :musiclist="musiclist"/>

  </div>
</template>

<script>
import MusicListView from './MusicListView.vue'
export default {
  name: 'MusicList',
  data () {
    return {
      musiclist: [],
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
      this.musiclist = res.result
      console.log(this.musiclist)
    })
  }
}
</script>

<style>

</style>
