<!--
    数据渲染
-->
<template>
  <div class="collection-block">
      <div class="block-padding">
          <div class="title">
              <h3>{{ title }}</h3>
              <router-link :to="`/more/${type}`">更多</router-link>
          </div>
          <!-- 只有中间的需要边距 对3取余 不等于1的 去掉边距 -->
          <div class="list clearfix">
              <div class="item"
              :class="{ 'clear-padding': index%3 !== 1 }"
              v-for="(item,index) in musiclist.slice(0,6)"
              :key="index"
              >
                  <div class="img-warpper">
                    <img :src="item.picUrl" alt />
                  </div>
                  <div class="main">{{ cutString(item.name) }}</div>
                  <div class="gary">{{ cutString(item.id) }}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MusicListView',
  data () {
    return {}
  },
  props: {
    recommend: {
      type: Array,
      default: function () {
        return []
      }
    },
    musiclist: {
      type: Array,
      default: function () {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
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
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
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
