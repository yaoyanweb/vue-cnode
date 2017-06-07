<template>
  <div  class="login">
    <input type="text" placeholder="请输入您的token"  v-model="token">
    <button style="height: 30px;margin-top: -11px;" @click="login()">验证登录</button>
    <ul data-v-1b490718="">
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
        token: ''
      }
    },
    methods: {
      login: function () {
        alert('Bus')
        if (this.token === '' || this.token === null) {
          alert('token不能为空！')
          return
        }
        this.$http.post('https://cnodejs.org/api/v1/accesstoken', { accesstoken: this.token }).then(
          (data) => {
            console.log(data.body)
          },
          (data) => {
            alert(data.body.error_msg)
          })
      }
    }
  }
</script>
<style>
.login{
  padding: 50px;
}
</style>
