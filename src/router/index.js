import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Content from '@/components/Content'
import Login from '@/components/yLogin'
import add from '@/components/add'
import threshold from '@/components/threshold'
import api from '@/components/api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
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
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/threshold',
      name: 'threshold',
      component: threshold
    },
    {
      path: '/api',
      name: 'api',
      component: api
    }

  ]
})
