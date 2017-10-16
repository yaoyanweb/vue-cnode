// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vueresource from 'vue-resource'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Vueresource)
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    loginname: '',
    avatar_url:'',
    id: '',
    user_success:'false'
  },
  mutations: {
    changeTab(state, user) {
      state.loginname  = user.body.loginname
      state.avatar_url  = user.body.avatar_url
      state.id  = user.body.id
      state.user_success  = user.body.success
    },
  },

})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data: {
      eventHub: new Vue()
  }
})

