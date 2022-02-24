<template>
  <div class="home">
    <music-list />
    <music-tabs />
  </div>
</template>

<script>
import MusicList from './MusicList.vue'
import MusicTabs from './MusicTabs.vue'
export default {
  name: 'Home',
  components: {
    MusicList,
    MusicTabs
  }
}
</script>
