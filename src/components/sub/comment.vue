<template>
  <div class="comment">

      <h3>评论区：</h3>
      <hr>

      <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 4}"
        placeholder="请输入评论的内容---"
        v-model="text">
      </el-input>
      <el-button type="primary" icon="el-icon-edit">发表评论</el-button>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>当前评论：</span>
        </div>
        <div v-for="item in commentsList" :key="item.id" class="text item">
            <span>{{item.user_name+':'}}</span>
            <p>{{item.content?item.content:'此用户很懒，什么也BB...'}}</p>
            <span>{{item.add_time | time}}</span>
            <br><hr>
        </div>
      </el-card>

      <el-button type="danger" icon="el-icon-plus" plain @click="loadMore">加载更多</el-button>

  </div>
</template>

<script>
export default {
    created(){
        this.getComments()
    },
    data(){
        return {
            text:'',
            pageIndex:1,
            commentsList:[]
        }
    },
    methods:{
        getComments(){
            this.axios.get(`api/getcomments/${this.id}?pageindex=${this.pageIndex}`)
            .then(resolve=>
                resolve.data.status==0?this.commentsList=this.commentsList.concat(resolve.data.message):alert('error')
            )
        },
        loadMore(){
            this.pageIndex++
            this.getComments()
        }
    },
    props:['id']
}
</script>

<style lang="css" scoped>
.comment h3{
    color:#555;
}
.comment hr{
    margin:10px 0;
}
.el-button{
    width:100%;
    margin:0 0 10px 0;
    height:40px;
} 
.clearfix span{
    color:#555;
    font-weight: bolder;
    font-size: 18.72px;
}
.text.item{
    position: relative;
}
.text.item span:nth-of-type(1){
    display: inline-block;
    font-weight: bolder;
    color:#555;
}
.text.item span:nth-of-type(2){
    display: inline-block;
    color:rgb(70, 162, 248);
    font-size: 14px;
    position: absolute;
    right:5px;
}
.text.item p{
    color:#777;
    font-size: 14px;
    margin:10px 0;
    text-indent: 2em;
}
.el-textarea{
    position: relative;
    z-index: 0;
}
</style>