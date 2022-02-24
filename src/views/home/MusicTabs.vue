<template>
<div>
    <tabs :defaultActiveIndex='defaultActiveIndex' @callback='updateIndex'>
        <tab label='tab1' index="1">
            <div>content1</div>
        </tab>
        <tab label='tab2' index="2">
            <div>content2</div>
        </tab>
        <tab label='tab3' index="3">
            <div>content3</div>
        </tab>
    </tabs>
</div>

</template>

<script>
export default {
  name: 'MusicTabs',
  data () {
    return {
      // 把 defaultActiveIndex 变成动态的值
      defaultActiveIndex: '1'
    }
  },
  mounted () {
    // 三条请求都成功后再执行
    // 合并网络请求
    this.$api.getDjCatetory({
      type: 2
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    updateIndex (index) {
      // 接收callback传递过来的index
      this.defaultActiveIndex = index
    }
  }
}
</script>

<style scoped>
.tabs {
    padding: 10px;
    background: #fff;
}
.musictop {
    background: #fff;
    padding: 10px;
}

.panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background: #fff;
}

.list {
    padding-top: 0;
    height: 450px;
}

.panel .list li {
    height: 60px;
    border-bottom: 1px solid #eee;
    padding-left: 0;
    display: flex;
    padding-top: 10px;
}

.panel .list li .poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
}

.panel .list li .poster img {
    border: 1px solid #eee;
}
.info {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.info .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
}

.info .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
}

.more-songs {
    color: #999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
}
</style>
