<template>
  <div>
    <div class="header">
      <router-link tag="span" to="/">&lt;</router-link>
      <h3>更多歌曲</h3>
    </div>
    <div class="list clearfix">
      <div
        class="item"
        v-for="(item, index) in moreDatas"
        :key="index"
        :class="{ 'clear-padding': index % 3 !== 1 }"
      >
        <div class="img-warpper">
          <img :src="item.pic_big" alt />
        </div>
        <div class="main">{{ cutString(item.title) }}</div>
        <div class="gray">{{ cutString(item.author) }}</div>
      </div>
    </div>
    <div ref="loadmore">加载更多</div>
  </div>
</template>

<script>
export default {
  name: 'More',
  data () {
    return {
      moreDatas: [],
      offset: 0
    }
  },
  mounted () {
    // 偏移量一开始为 0
    this.http(this.offset)
    // 触底加载更多事件

    // 设置一个定时器
    var timer = null
    // 整个文档高度
    const winHeight = document.documentElement.clientHeight
    // 鼠标滚动事件
    window.addEventListener('scroll', () => {
      if (timer) {
        // 如果定时器存在 清除定时器
        clearTimeout(timer)
      }
      // 否则 设置一个定时器
      timer = setTimeout(() => {
      // 鼠标滚动高度
      //   const currentHeight = document.documentElement.scrollTop
        const currentHeight = this.$refs.loadmore.getBoundingClientRect().top
        if (winHeight > currentHeight) {
        // 这样会触发很多次 所以需要节流防抖
          console.log('需要加载更多数据')
          // 网络请求 加载更多数据
          this.http(this.offset)
        }
      }, 300)
    })
  },
  methods: {
    http (offset) {
      this.$api
        .getMusicList({
          method: 'baidu.ting.billboard.billList',
          type: this.$route.params.type,
          size: 15,
          offset: offset // 加载的条数偏移量
        })
        .then((res) => {
          // 如果没有更多数据 res.song_list
          if (res.song_list) {
            console.log(res)
            // 设置偏移量
            // concat 视图不会更新 用 push
            // 数组里面加数组 ...展开运算符
            this.moreDatas.push(...res.song_list)
            this.offset += 15
          } else {
            this.$ref.loadmore.innerHTML = '没有更多数据'
          }
        })
    },
    // 多余隐藏
    cutString (str) {
      if (str.length > 8) {
        return str.substring(0, 8) + '...'
      }
      return str
    }
  }
}
</script>

<style scoped>
.header {
    width: 100%;
    background: #fff;
    overflow: hidden;
    text-align: center;
    clear: both;
}
.header span {
    display: block;
    float: left;
    line-height: 40px;
}
.header h3 {
    display: inline-block;
    line-height: 40px;
}
.list {
    width: 100%;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
}

.clear-padding {
    padding: 0 !important;
}

.main {
    margin-top: 4px;
    font-size: 12px;
}

.gray {
    font-size: 12px;
    color: #999;
}

.btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
}
</style>
