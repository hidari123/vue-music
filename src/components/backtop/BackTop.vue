<template>
  <div class="th-back-top" v-show="show" @click="clickTopHandle">
      <span class="bg-back2top2"></span>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data () {
    return {
      show: false
    }
  },
  created () {
    // 滚动超过屏幕高度显示
    const winHeight = document.documentElement.clientHeight
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line prefer-const
      let scrollHeight = document.documentElement.scrollTop
      if (winHeight < scrollHeight) {
        this.show = true
      } else {
        this.show = false
      }
    })
  },
  methods: {
    clickTopHandle () {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style scoped>

.th-back-top {
    position: fixed;
    right: 15px;
    bottom: 104px;
    height: 39px;
    width: 80px;
    z-index: 0;
    opacity: 0.8;
    text-align: right;
}

.bg-back2top2 {
    display: inline-block;
    background: url(//gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F82%2F93%2F596fbf282c7a5_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648368798&t=0fb48c3572502cddfae2370daccdfdd3)
        no-repeat 0 0;
    -webkit-background-size: 39px 39px;
    background-size: 39px 39px;
    width: 39px;
    height: 39px;
}

</style>
