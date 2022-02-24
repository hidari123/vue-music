import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/'
import Layout from '@/views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/topic',
        name: 'Topic',
        // component: Topic
        // 异步加载方案 什么时候需要什么时候加载
        component: () => import('../views/Topic.vue')
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('../views/Mine.vue')
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import('../views/Search.vue')
      }
    ]
  },
  {
    path: '/more/:type',
    name: 'More',
    component: () => import('../views/home/MusicMore.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('../views/home/MusicDetails.vue')
  },
  {
    path: '/player/:id/:name/:image',
    name: 'Player',
    component: () => import('../views/Player.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  // linkActiveClass 设置 链接激活时使用的 CSS 类名。
  // 默认值可以通过路由的构造选项 linkActiveClass 来全局配置
  linkActiveClass: 'active'
})

export default router
