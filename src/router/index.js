import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Content from '@/components/Content'
import Login from '@/components/yLogin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/Content',
      name: 'Content',
      component: Content
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
