<template>
<div v-html="$route.params.content">
</div>
</template>

<script>
  export default {
    created: function () {
      var content = this.$route.params.content
      console.log(content, 1111)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
