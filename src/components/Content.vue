<template>
<div v-html="content"></div>
</template>

<script>
  export default {
    data () {
      return {
        content: this.$route.params.content
      }
    },
    created: function () {
      var content = this.$route.params.content
      console.log(content, 1111)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
