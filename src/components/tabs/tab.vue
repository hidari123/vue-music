<script>
export default {
  name: 'Tab',
  props: {
    label: {
      tyoe: String,
      default: 'tab'
    },
    index: {
      type: String,
      default: '1'
    }
  },
  mounted () {
    // 把tab 中的插槽 content 传递给父组件 tabs
    // 需要 push index 选中效果
    // 选中效果由 isActive 高亮判断
    // this.$parent.showContent.push(this.$slots.default)
    // 直接 push this 把 tab 整个push进去
    this.$parent.showContent.push(this)
  },
  computed: {
    isActive () {
      return this.$parent.defaultActiveIndex === this.index
    }
  },
  methods: {
    clickTabHandle () {
      // $parent 可以直接修改父组件的props值 但是不建议
    //   this.$parent.defaultActiveIndex = this.index
    // tabs 子组件 tab 利用 $parent 调用父组件 tabs 方法 传参 this.index
      this.$parent.updateDefaultIndex(this.index)
    }
  },
  render () {
    const classStyle = {
      tab: true,
      active: this.isActive
    }
    return (
      <li class={ classStyle} onClick={ this.clickTabHandle }>{ this.label }</li>
    )
  }
}
</script>

<style scoped>
.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}
</style>
