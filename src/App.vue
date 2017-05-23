<template>
  <div id="app" >
    <y-header></y-header>
    <div id="main" class="clear">
      <router-view class="left" style="width: 1000px"></router-view>
      <y-right class="right"></y-right>
      <div class="clear"></div>
    </div>
    <y-footer></y-footer>
  </div>
</template>

<script>

import yHeader from './components/yheader'
import yRight from './components/yright'
import yFooter from './components/yfooter'
import ypublic from './assets/css/public.css'
export default {
  components: {
    yHeader,
    yRight,
    yFooter,
    ypublic
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
