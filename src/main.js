import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/common.css'
import './assets/font/iconfont.css'
import api from './api'
import Tabs from './components/tabs/index'

Vue.config.productionTip = false
// 将api挂载到vue的原型上
Vue.prototype.$api = api
Vue.use(Tabs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
