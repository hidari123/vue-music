<template>
<!-- 视图容器 -->
    <div>
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from '../components/nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style>

</style>
