<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea v-model="commentContent" placeholder="请输入zz的内容（做多吐槽120字）" maxlength="120"></textarea>

    <mt-button  @click="postComment" type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="i">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>    
</template>

<script>
import { Toast } from "mint-ui"

export default {
    data(){
        return {
            pageindex:1,
            comments:[],
            commentContent:''
        }
        
    },
    created() {
        this.getComments()
    },
    methods: {
        getComments(){
            this.$http.get('getcomments/' + this.id + '?pageindex=' +this.pageindex)
            .then( result => {
                this.comments = this.comments.concat(result.body.message)  
            })
        },
        getMore() {
            // 加载更多
            this.pageIndex++
            this.getComments()
        },
        postComment(){
          if(this.commentContent.trim().length === 0)
            return Toast("请输入评论内容")

            // console.log(this.commentContent)  
            this.$http
              .post("postcomment/" + this.id,{content:this.commentContent})
              .then( result => {
                  
                  
                  
                 Toast(result.body.message)

                 this.comments=[]
                 this.pageIndex=1
                 this.getComments()
                  // 清空评论
                 this.commentContent = ''

            })
          
        }
    },
    props:['id']
}
</script>

<style lang="less" scope>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
