<script>
import Content from './content.vue'
export default {
  name: 'Tabs',
  components: {
    Content
  },
  data () {
    return {
      // tabs 是 tab 和 content 共同父级 可以在里面定义一个data 子组件调用push
      showContent: []
    }
  },
  props: {
    // props 不能直接被改变
    defaultActiveIndex: {
      type: String,
      default: '1'
    }
  },
  methods: {
    updateDefaultIndex (index) {
      // emit 传递 index 给父组件 MusicTabs
      this.$emit('callback', index)
    }
  },
  render () {
    return (
      <div>
        <ul class="tabs-header">{ this.$slots.default }</ul>
        <Content showContent = { this.showContent }/>
      </div>
    )
  }
}
</script>

<style scoped>

.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
  justify-content: center;
  align-items: center;
}
</style>
