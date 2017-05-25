import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Content',
      name: 'Content',
      component: Content
    },
    {
      path: '/',
      name: 'List',
      component: List
    }
  ]
})
