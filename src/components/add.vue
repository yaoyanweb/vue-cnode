<template>
    <div class="panel">
      <div class="header">
        <ol class="breadcrumb">
          <li><a href="/">主页</a><span class="divider">/</span></li>

          <li class="active">发布话题</li>

        </ol>
      </div>
      <div class="inner post left " style="width: 90%">
          <fieldset>
            <span class="tab-selector">选择版块：</span>
            <select  v-model="tab">
              <option value="share">分享</option>
              <option value="ask">问答</option>
              <option value="job">招聘</option>
              <option value="dev">客户端测试</option>
            </select>
            <span id="topic_create_warn"></span>
            <div class="mb30">
              <el-input
                type="textarea"
                autosize
                placeholder="请输入标题"
                v-model="title_text">
              </el-input>
              <div style="margin: 20px 0;"></div>
              <el-input
                type="textarea"
                :autosize="{ minRows: 10, maxRows: 10}"
                placeholder="请输入内容"
                v-model="con_text">
              </el-input>

            </div>
            <el-button type="primary" @click="submit">提交</el-button>
          </fieldset>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          tab: '',
          con_text: '',
          title_text:''
        }
      },
      methods: {
        submit:function () {
            if (this.tab == "" || this.tab == null){
              this.open('请选择发布板块')
              return
            }
          if (this.title_text == "" || this.title_text == null){
            this.open('请输入发布标题！')
            return
          }
          if (this.con_text == "" || this.con_text == null){
            this.open('请输入发布内容！')
            return
          }
          this.$http.post('https://cnodejs.org/api/v1/topics' , {
            accesstoken: localStorage['token'],
            title:this.title_text,
            tab:this.tab,
            content:this.con_text
          }).then((data) => {
            this.$router.push('/')
          },(data) => {
            this.open(data.body.error_msg)
          })
        },
        open(info) {
          this.$alert(info , '提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `提示: ${ info }`
              })
            }
          })
        }

      }
    }
</script>

<style>

</style>
