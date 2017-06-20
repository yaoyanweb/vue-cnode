<template id="a0">
  <div  class="login">
    <el-input v-model="token" placeholder="请输入您的token" class="hei"></el-input>
    <el-button type="primary" @click="login">验证登录</el-button>
    <ul data-v-1b490718="" >
      <li data-v-1b490718="">为了更好的体验请登录😊</li>
      <li data-v-1b490718="">输入CNode账号的Access Token😄</li>
      <li data-v-1b490718="">在个人中心可以获取Access Token😉</li>
      <li data-v-1b490718="">调用的是官方API,请放心使用🤗</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        token: localStorage['token']
      }
    },
    methods: {
      login: function () {
        if (this.token == '' || this.token == null) {
          this.open('token不能为空')
          return
        }
        this.$http.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken:this.token}).then(
          (data) => {
            localStorage['token'] = this.token
            this.$store.commit('changeTab', data)
            this.open('登录成功！')
          },
          (data) => {
            this.open(data.body.error_msg)
          })
      },
      open: function (info) {
        this.$alert(info, '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `提示:${info}`
            })
          }
        })
      }
    },
    computed: {

    }
  }
</script>
<style >
.el-input__inner{
  height: 40px!important;
  width: 20%!important;
}
.login{
  padding: 50px;
}
</style>
