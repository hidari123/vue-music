<template>
  <div class="lrcContainer">
      <div class="lrc" ref="lrc">
          <p class="lrc-p"
          :class='{ "active" : currentTime > allKeys[index] && currentTime < allKeys[index+1] }'
          v-for="(item, key, index) in lrcData"
          :key="index"
          >
              <span>{{item}}{{ scrollLRC(index) }}</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LRC',
  data () {
    return {
      lrcData: '',
      allKeys: []
    }
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    currentTime: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this.$api.getLRC({
      id: this.id
    }).then(res => {
      this.filterLRC(res.lrc.lyric)
    })
  },
  methods: {
    filterLRC (values) {
      if (!values) return false
      const lrc = {}
      // split 方法按照给定规则分割字符串 返回一个由分割出来的子字符串组成的数组
      // 'a|b|c'.split('|') => ['a', 'b', 'c']
      // eslint-disable-next-line no-useless-escape
      const lyric = values.split('\n') // 有问题 有的是\n 有的是空格
      //   表达式加上参数g之后，表明'可以'进行全局匹配
      const reg = /\[\d*:\d*(:|\.)\d*]/g
      for (let i = 1; i < lyric.length; i++) {
        const timeRegArr = lyric[i].match(reg)
        // 因为有的歌词格式不标准 如果匹配不到正则 过滤跳出循环
        if (!timeRegArr) continue
        // 获取歌词
        const content = lyric[i].replace(timeRegArr, '')
        // 获取时间
        const time = timeRegArr[0]
        const min = parseInt(time.match(/\[\d*/i).toString().slice(1))
        // eslint-disable-next-line no-useless-escape
        const sec = parseInt(time.match(/\:\d*/i).toString().slice(1))
        const rightTime = min * 60 + sec
        lrc[rightTime] = content
      }
      this.lrcData = lrc
      this.getAllKeys(this.lrcData)
    },
    getAllKeys (lrcArr) {
      for (const key in lrcArr) {
        this.allKeys.push(key)
      }
    },
    // 歌词滚动效果
    // 调整 top 高度为负
    scrollLRC (index) {
      if (this.currentTime > this.allKeys[index] && this.currentTime < this.allKeys[index + 1]) {
        this.$refs.lrc.style.top = -(30 * (index - 2)) + 'px'
      }
    }
  }
}
</script>

<style scoped>
.active {
    color: red;
}

.lrcContainer {
    width: 100%;
    height: 150px;
    overflow: scroll;
    position: relative;
}

.lrc {
    width: 100%;
    position: absolute;
    top: 0;
}

.lrc-p {
    height: 30px;
    line-height: 30px;
}

.up30 {
    margin-top: -30px;
}

</style>
