<template>
  <div>
      <ul class="top-nav">
          <!--
              默认情况下路由是包含匹配模式，也就是 / 和 /about 都是 / 开头
              以 / 开头的路由都会被匹配上active类名
              给 / 路由加上exact属性，/ 就变成了精确匹配模式，必须是 / 才会匹配过来，/about不会匹配过来
           -->
          <li><router-link exact to='/'>首页</router-link></li>
          <li><router-link to='/topic'>榜单</router-link></li>
          <li><router-link to='/mine'>我的</router-link></li>
          <li><router-link to='/search'>搜索</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.top-nav {
    display: flex;
    background: #fff;
    li {
        flex: 1;
        text-align: center;
        padding-top: 10px;
        a {
            display: block;
            padding-bottom: 8px;
        }
        .active {
            border-bottom: 2px solid #ff0000;
        }
    }
}
</style>
