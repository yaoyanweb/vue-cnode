<template>
 <header>
   <div class="navbar">
     <div class="navbar-inner">
       <div class="container">
           <router-link class="brand" to="/">
             <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
           </router-link>
         <input   class="search-query span3"  v-model="tit">
         <ul class="nav pull-right">
           <li><router-link to="/">首页</router-link></li>
           <li><a href="/getstart">新手入门</a></li>
           <li><a href="/api">API</a></li>
           <li><a href="/about" target="">关于</a></li>
           <li><a href="/signup">注册</a></li>
           <li>
              <router-link to="/login" >
                <span v-if="user_font">登录</span>
              </router-link>
           </li>
           <li><router-link to="/login" v-if="user_font==false">{{this.$store.state.loginname}}</router-link></li>
         </ul>
         <a class="btn btn-navbar" id="responsive-sidebar-trigger">
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </a>
       </div>
     </div>
   </div>
 </header>
</template>

<script>
    export default {
      data () {
        return {
          ccc: 222,
          tit:'',
          user_font: true
        }
      },
      computed: {
        getUser() {
          return this.$store.state.loginname;
        }
      },
      watch: {
        getUser(val) {
          this.user_font = false

        }
      },
      methods: {

      }
    }
</script>

<style>

</style>
