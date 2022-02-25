import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/common.css'
import './assets/font/iconfont.css'
import api from './api'
import Tabs from './components/tabs/index'
import BackTop from './components/backtop/index'

Vue.config.productionTip = false
// 将api挂载到vue的原型上
Vue.prototype.$api = api
Vue.use(Tabs)
Vue.use(BackTop)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
