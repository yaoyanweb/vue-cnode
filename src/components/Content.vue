<template>
<div>
	<h3 class="mt20 mb30">{{title}}</h3>
	<div v-html="content"></div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        content: this.$route.query.content,
        title: this.$route.query.title
      }
    },
    created: function () {
      console.log(this.title)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
