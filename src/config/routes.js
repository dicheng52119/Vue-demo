import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入创建的四个页面
import Home from '../Home'
import Explorer from '../Explorer'
import Cart from '../Cart'
import Me from '../Me'
import BookDetail from '../books/Detail'

// 使用路由实例插件
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    // 将页面组件与path指定的路由关联
    {name: 'Home', path: '/', component: Home},
    {name: 'Explorer', path: '/categories', component: Explorer},
    {name: 'Cart', path: '/shopping-cart', component: Cart},
    {name: 'Me', path: '/me', component: Me},
    {name: 'BookDetail', path: '/books/:id', component: BookDetail}
  ]
})
