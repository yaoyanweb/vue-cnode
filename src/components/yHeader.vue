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
           <li><router-link to="/threshold">新手入门</router-link><</li>
           <li><router-link to="/api">API</router-link></li>
           <li>
              <router-link to="/login" v-show="this.$store.state.loginname == ''">
                <span >登录</span>
              </router-link>
           </li>

           <li @click=quit()>
             <router-link to="/" v-show="this.$store.state.loginname !== ''">
                退出
             </router-link>
           </li>
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
          return this.$store.state.avatar_url;
          return this.$store.state.success;
        }
      },
      watch: {
        getUser(val) {
          return this.$store.state.loginname;
          return this.$store.state.avatar_url;
          return this.$store.state.success;
        }
      },
      methods: {
          quit:function () {
            localStorage['token']= ""
            this.$store.state.loginname = '';
            this.$store.state.avatar_url = '';
            this.$store.state.success = '';
          }
      }
    }
</script>

<style>

</style>
