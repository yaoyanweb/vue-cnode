<template>
  <div id="app">
    <y-header></y-header>
    <div id="main" class="clear">
      <router-view class="left" style="width: 100%;background:#fff"></router-view>
      <div class="clear"></div>
    </div>
    <y-footer></y-footer>
  </div>
</template>

<script>
import yHeader from './components/yheader'
import yFooter from './components/yfooter'
import ypublic from './assets/css/public.css'
import aaa from './components/aaa'
export default {
  components: {
    yHeader,
    yFooter,
    ypublic,
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
