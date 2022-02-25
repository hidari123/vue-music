<template>
    <div class="list clearfix">
        <div
            class="item"
            v-for="(item,index) in DJRecommend"
            :key="index"
            :class="{ 'clear-padding': index%3 !== 1 }"
        >
            <div class="img-warpper">
                <img :src="item.picUrl" alt />
            </div>
            <div class="main">{{ item.name }}</div>
            <div class="gray">{{ item.desc }}</div>
        </div>
        <div class="more" ref="more" id="more">{{ more }}</div>
    </div>
</template>

<script>

// 加载更多

export default {
  name: 'DJMore',
  data () {
    return {
      DJRecommend: [],
      hasMore: false,
      more: '加载更多'
    }
  },
  mounted () {
    this.http()
    const winHeight = document.documentElement.clientHeight
    let timer = null
    window.addEventListener('scroll', () => {
      // 获取元素相对于顶部的位置
      // 由于在 mounted 里面 需要保证读取元素的时候 元素已经渲染出来
      // 先判断元素存在后再进行操作
      if (this.$refs.more) {
        // eslint-disable-next-line prefer-const
        let scrollHeight = this.$refs.more.getBoundingClientRect().top
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          if (winHeight > scrollHeight) {
          // 不能加载多次
          // 防抖
            if (this.hasMore) {
              this.http()
            } else {
              // 没有更多数据
              this.more = '没有更多数据'
            }
          }
        }, 300)
      }
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScrollx, true)
  },
  methods: {
    http () {
      this.$api.getDjCatetory({
        type: this.$route.params.id
      }).then(res => {
        // 数组和对象的重点 是否可以相应 UI 刷新
        this.DJRecommend.push(...res.djRadios)
        this.hasMore = res.hasMore
      })
    }
  }
}
</script>

<style scoped>
.list {
    width: 100%;
}

.list .item {
    width: 100%;
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
