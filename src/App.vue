<template>
  <div id="app">
    <y-header></y-header>
    <div id="main" class="clear">
      <router-view class="left" style="width:70%;background:#fff"></router-view>
      <y-right class="right" style="width: 25%"></y-right>
      <div class="clear"></div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>

</script>
<script>
import yHeader from './components/yheader'
import yFooter from './components/yfooter'
import ypublic from './assets/css/public.css'
import yRight from './components/yRight.vue'
import add from './components/add.vue'
import threshold from './components/threshold.vue'
import api from './components/api.vue'
export default {
  components: {
    yHeader,
    yFooter,
    ypublic,
    yRight,
    add,
    threshold,
    api
  },
  data () {
    return {
      bb: '1111111111'
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
