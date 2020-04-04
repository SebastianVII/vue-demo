<template>
  <div class="news-info">

      <h3>{{newsInfo.title}}</h3>

      <div class="extra">
        <span>发表时间：{{newsInfo.add_time | time}}</span><span>点击：{{newsInfo.click}}次</span>
      </div>
      <hr>

      <div v-html="newsInfo.content"></div>

      <comment :id="this.id"></comment>

  </div>
</template>

<script>
import comment from '../sub/comment.vue'

export default {
    created(){
        this.getInfo()
    },
    data(){
        return {
            id:this.$route.params.id,
            newsInfo:{}
        }
    },
    methods:{
        getInfo(){
            this.axios.get('api/getnew/'+this.id)
            .then(resolve=>
                resolve.data.status==0?this.newsInfo=resolve.data.message[0]:alert('error')
            )
        }
    },
    components:{
        comment
    }
}
</script>

<style scoped lang="css">
.news-info{
    padding:0 15px;
}
.news-info h3{
    color:#555;
    text-align: center;
    margin:10px 0;
}
.extra{
    color:rgb(70, 162, 248);
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
}
.news-info div:nth-of-type(2){
    margin:10px 0;
    color:#666;
    font-size: 14px;
}
.news-info div:nth-of-type(2) img{
    width:100%;
    height:100%;
}
</style>