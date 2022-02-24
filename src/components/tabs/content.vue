<script>
export default {
  name: 'Content',
  data () {
    return {}
  },
  props: {
    showContent: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  render () {
    // push 的是整个tab组件
    // 这里的element 指的是 tab
    // 获取content 需要使用插槽
    // 根据 isActive 属性判断 是否显示 content
    return (
      <div>
        { this.showContent.map((element, index) => {
          return <div>{ element.isActive ? element.$slots.default : '' }</div>
        }) }
      </div>
    )
  }
}
</script>

<style>

</style>
