<template>
  <div class="hello">
    <div id="content" style="margin-right: 0;text-align: left">
      <div class="panel">
        <div class="header clear">
          <a href="/?tab=all" class="topic-tab current-tab">全部</a>
          <a href="/?tab=good" class="topic-tab ">精华</a>
          <a href="/?tab=share" class="topic-tab ">分享</a>
          <a href="/?tab=ask" class="topic-tab ">问答</a>
          <a href="/?tab=job" class="topic-tab ">招聘</a>
          <div class="right">
            <span>page:</span>
            <select class="w80" @change="page()" v-model="num">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
          <div class="clear"></div>
        </div>
        <div class="inner no-padding">
          <div id="topic_list" v-for="x in posts.data">
            <div class="cell">
              <a class="user_avatar pull-left" href="/user/i5ting">
                <img v-bind:src=x.author.avatar_url v-bind:title=x.author.loginname>
              </a>
              <span class="reply_count pull-left">
                <span class="count_of_replies" title="回复数">{{x.reply_count}}</span>
                <span class="count_seperator">/</span>
                <span class="count_of_visits" title="点击数">{{x.visit_count}}</span></span>
              <a class="last_time pull-right" href="">
                <img class="user_small_avatar" src="https://avatars3.githubusercontent.com/u/26704801?v=3&amp;s=120">
                <span class="last_active_time">7 小时前</span></a>
              <div class="topic_title_wrapper">
                <span class="put_top">置顶</span>
                <router-link :to="{ name: 'Content', query: {content: x.content,title:x.title}}">
                  <a class="topic_title"  href="javascript:;"  v-bind:title=x.title >{{x.title}}</a>
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        posts: [{}],
        num: '10'
      }
    },
    mounted: function () {
      // GET request
      this.$http.get('https://cnodejs.org/api/v1/topics', {page: 40, tab: 'ask', limit: 10, mdrender: 'true'}).then(
        (data) => {
          console.log(data, 2222222)
          this.posts = data.body
        },
        (data) => {
          console.log(data)
        })
    },
    methods: {
      page: function () {
        let num = this.num
        this.$http.get('https://cnodejs.org/api/v1/topics', {page: 40, tab: 'ask', limit: 10, mdrender: 'true'}).then(
          (data) => {
            console.log(data, 1111)
            this.posts = data.body
          },
          (data) => {
            console.log(data)
          })
        console.log(num, 11111)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>h1, h2 { font-weight: normal; } ul { list-style-type: none; padding: 0; } li { display: inline-block; margin: 0 10px; } a { color: #42b983; }</style>
