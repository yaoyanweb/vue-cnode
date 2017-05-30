<template>
  <div class="hello">
    <div id="content" style="margin-right: 0;text-align: left">
      <div class="panel clear">
        <div class="header">
          <a href="/?tab=all" class="topic-tab current-tab">全部</a>
          <a href="/?tab=good" class="topic-tab ">精华</a>
          <a href="/?tab=share" class="topic-tab ">分享</a>
          <a href="/?tab=ask" class="topic-tab ">问答</a>
          <a href="/?tab=job" class="topic-tab ">招聘</a>
          <select class="right w80" style="position:relative;top:-4px;"  @change="get_page()">
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
          </select>
          <span class="right f18 mr5">page:</span>
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
                <router-link :to="{ name: 'Content', query: {content: x.content,title: x.title}}">
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
        posts: [{}]
      }
    },
    mounted: function () {
      // GET request
      this.$http.get('https://cnodejs.org/api/v1/topics').then(
        (data) => {
          console.log(data)
          this.posts = data.body
        },
        (data) => {
          console.log(data)
        })
    },
    methods: {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>h1, h2 { font-weight: normal; } ul { list-style-type: none; padding: 0; } li { display: inline-block; margin: 0 10px; } a { color: #42b983; }</style>
