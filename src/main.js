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
  window. store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        alert(state.count)
      }
    }
})
new Vue({
  el: '#app',
  router,
  Vuex,
  template: '<App/>',
  components: { App },
  data: {
      eventHub: new Vue()
  }
})

