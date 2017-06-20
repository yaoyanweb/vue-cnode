<template>
<div>
  <h3 class="mt20 mb30">{{con.title}}</h3>
  <div v-html="con.content"></div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        id: this.$route.query.id,
        con: [{}]
      }
    },
    created: function () {
      this.$http.get(`https://cnodejs.org/api/v1/topic/` + this.id).then(
        (info) => {
          this.con = info.body.data
        },
        (info) => {
          console.log(info)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
