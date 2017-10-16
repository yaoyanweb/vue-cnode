<template>
  <div id="sidebar">
    <div class="panel" v-show="this.$store.state.loginname !== ''">
      <div class="header">
        <span class="col_fade">个人信息</span>
        
      </div>
      <div class="inner">
        <div class="user_card">
          <div>
            <a class="user_avatar">
              <img :src="this.$store.state.avatar_url"  >
            </a>
            <span class="user_name"><a class="dark" >{{this.$store.state.loginname}}</a></span>
          </div>
        </div>

      </div>
    </div>
    <div class="panel"  v-show="this.$store.state.loginname == ''">
     <div class="header"> 
        <router-link to="/login" >
            <el-button type="primary">登录</el-button>
        </router-link>
      </div>
    </div>
    <div class="panel">
      <div class="inner" v-show="this.$store.state.loginname !== ''">
        <router-link to="/add">
          <span class="span-success">发布话题</span>
        </router-link>
      </div>
    </div>

    <div class="panel">
      <div class="inner ads">

        <a href="https://alinode.aliyun.com/?ref=cnode" target="_blank" class="banner sponsor_outlink" data-label="alinode">
          <img src="//dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_">
        </a>
        <div class="sep10"></div>

        <a href="http://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc&amp;utm_campaign=multicloud&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" class="banner sponsor_outlink" data-label="ucloud-banner">
          <img src="//dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG">
        </a>

      </div>
    </div>
    <div class="panel">
      <div class="header">
        <span class="col_fade">无人回复的话题</span>
      </div>
      <div class="inner">

        <ul class="unstyled">
          <li>
            <div><a class="dark topic_title" href="/topic/5948e61dff5813233faada72" title="request爬虫设置代理，总是报错求助">request爬虫设置代理，总是报错求助</a>
            </div>
          </li>
          <li>
            <div><a class="dark topic_title" href="/topic/5948d3789079357b642b2990" title="进行定时任务，发现一个奇怪的现象，调试模式和正式运行的打印结果顺序不同">进行定时任务，发现一个奇怪的现象，调试模式和正式运行的打印结果顺序不同</a>
            </div>
          </li>
          <li>
            <div><a class="dark topic_title" href="/topic/5948d3275ee4f56e642e88be" title="使用Node做了一些好玩的东西【Node-Lab】【持续完善中】">使用Node做了一些好玩的东西【Node-Lab】【持续完善中】</a>
            </div>
          </li>
          <li>
            <div><a class="dark topic_title" href="/topic/5948d139325c502917ef0c1f" title="安装heapdump报错 求解答。">安装heapdump报错 求解答。</a>
            </div>
          </li>
          <li>
            <div><a class="dark topic_title" href="/topic/5948cb669079357b642b2988" title="JavaScript中的递归">JavaScript中的递归</a>
            </div>
          </li>

        </ul>

      </div>
    </div>



    <div class="panel">
      <div class="header">
        <span class="col_fade">积分榜</span>
        &nbsp;
        <a class="dark" href="/users/top100">TOP 100 &gt;&gt;</a>
      </div>
      <div class="inner">

        <ol>
          <li>
            <span class="top_score">18895</span>
            <span class="user_name"><a href="/user/i5ting">i5ting</a></span>
          </li>
          <li>
            <span class="top_score">14510</span>
            <span class="user_name"><a href="/user/alsotang">alsotang</a></span>
          </li>
          <li>
            <span class="top_score">9330</span>
            <span class="user_name"><a href="/user/leapon">leapon</a></span>
          </li>
          <li>
            <span class="top_score">8700</span>
            <span class="user_name"><a href="/user/jiyinyiyong">jiyinyiyong</a></span>
          </li>
          <li>
            <span class="top_score">6460</span>
            <span class="user_name"><a href="/user/yakczh">yakczh</a></span>
          </li>
          <li>
            <span class="top_score">5360</span>
            <span class="user_name"><a href="/user/DevinXian">DevinXian</a></span>
          </li>
          <li>
            <span class="top_score">5180</span>
            <span class="user_name"><a href="/user/magicdawn">magicdawn</a></span>
          </li>
          <li>
            <span class="top_score">4855</span>
            <span class="user_name"><a href="/user/imhered">imhered</a></span>
          </li>
          <li>
            <span class="top_score">4550</span>
            <span class="user_name"><a href="/user/captainblue2013">captainblue2013</a></span>
          </li>
          <li>
            <span class="top_score">4410</span>
            <span class="user_name"><a href="/user/fengmk2">fengmk2</a></span>
          </li>

        </ol>

      </div>
    </div>
    <div class="panel">
      <div class="header">
        <span class="col_fade">友情社区</span>
      </div>
      <div class="inner">
        <ol class="friendship-community">
          <li>
            <a href="https://ruby-china.org/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png">
            </a>
          </li>
          <div class="sep10"></div>
          <li>
            <a href="http://golangtc.com/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png">
            </a>
          </li>
          <div class="sep10"></div>
          <li>
            <a href="http://phphub.org/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png">
            </a>
          </li>
          <div class="sep10"></div>
          <li>
            <a href="https://testerhome.com/" target="_blank">
              <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK">
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div class="panel">
      <div class="header">
        <span class="col_fade">客户端二维码</span>
      </div>
      <div class="inner cnode-app-download">
        <img width="200" src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
        <br>
        <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
      </div>
    </div>
  </div>
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
        changeTab() {
          return this.$store.state.loginname;
          return this.$store.state.avatar_url;
          return this.$store.state.success;
        }
      },
      watch: {
        changeTab(val) {
          return this.$store.state.loginname;
          return this.$store.state.avatar_url;
          return this.$store.state.success;
        }
      },
  methods: {
  }
}
</script>

<style>

</style>
