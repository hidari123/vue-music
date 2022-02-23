<template>
  <div class="home">
    <music-list />
  </div>
</template>

<script>
import MusicList from './MusicList.vue'
export default {
  name: 'Home',
  components: {
    MusicList
  }
}
</script>
