import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Content from '@/components/Content'
import Login from '@/components/yLogin'
import Validator from 'vue-validator'
import add from '@/components/add'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.use(Router)
Vue.use(Validator)
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
    }
  ]
})
