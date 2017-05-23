<template>
  <div class="hello">
    <div id="content" style="margin-right: 0;text-align: left">
      <div class="panel">
        <div class="header">
          <a href="/?tab=all" class="topic-tab current-tab">全部</a>
          <a href="/?tab=good" class="topic-tab ">精华</a>
          <a href="/?tab=share" class="topic-tab ">分享</a>
          <a href="/?tab=ask" class="topic-tab ">问答</a>
          <a href="/?tab=job" class="topic-tab ">招聘</a></div>
        <div class="inner no-padding">
          <div id="topic_list">
            <div class="cell">
              <a class="user_avatar pull-left" href="/user/i5ting">
                <img src="https://avatars0.githubusercontent.com/u/3118295?v=3&amp;s=120" title="i5ting"></a>
              <span class="reply_count pull-left">
                <span class="count_of_replies" title="回复数">71</span>
                <span class="count_seperator">/</span>
                <span class="count_of_visits" title="点击数">17794</span></span>
              <a class="last_time pull-right" href="/topic/58eee565a92d341e48cfe7fc#5923d0799e32cc84569a725b">
                <img class="user_small_avatar" src="https://avatars3.githubusercontent.com/u/26704801?v=3&amp;s=120">
                <span class="last_active_time">7 小时前</span></a>
              <div class="topic_title_wrapper">
                <span class="put_top">置顶</span>
                <a class="topic_title" href="/topic/58eee565a92d341e48cfe7fc" title="2017，我们来聊聊 Node.js">2017，我们来聊聊 Node.js</a></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    ready: function () {
      this.$http.get('http://httpbin.org/ip', function (data, status, request) {
        console.log(data)
        this.$set('origin', data)
      }).error(function (data, status, request) {
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>h1, h2 { font-weight: normal; } ul { list-style-type: none; padding: 0; } li { display: inline-block; margin: 0 10px; } a { color: #42b983; }</style>
