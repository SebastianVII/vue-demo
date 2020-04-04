<template>
  <div class="photo-info">

      <h3>{{photoInfo.title}}</h3>
      <div class="extra">
        <span>发表时间：{{photoInfo.add_time | time}}</span><span>点击：{{photoInfo.click}}次</span>
      </div>
      <hr>

      <div v-html="photoInfo.content"></div>

      <h3>相关图片：</h3>
      <hr>
      <vue-preview :slides="previewList"></vue-preview>

      <comment :id="id"></comment>

  </div>
</template>

<script>
import comment from '../sub/comment.vue'

export default {
    created(){
        this.getPhotoInfo()
        this.getPreview()
    },
    data(){
        return {
            id:this.$route.params.id,
            photoInfo:{},
            previewList:[]
        }
    },
    methods:{
        getPhotoInfo(){
            this.axios.get('api/getimageInfo/'+this.id)
            .then(resolve=>
                resolve.data.status==0?this.photoInfo=resolve.data.message[0]:alert('error')
            )
        },
        getPreview(){
            this.axios.get('api/getthumimages/'+this.id)
            .then(resolve=>{
                resolve.data.status==0?
                resolve.data.message.forEach(item=>{
                    item.w=600
                    item.h=400
                    item.msrc=item.src
                    item.alt='图片'
                    item.title='图片'
                })
                :alert('error')

                this.previewList=resolve.data.message
            })
        }
    },
    components:{
        comment
    }
}
</script>

<style scoped lang="css">
.photo-info{
    padding:0 15px;
}
.photo-info h3:nth-of-type(1){
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
.photo-info div:nth-of-type(2){
    margin:10px 0;
    color:#666;
    font-size: 14px;
}
.photo-info div:nth-of-type(2) img{
    width:100%;
    height:100%;
}
.photo-info h3:nth-of-type(2){
    color:#555;
}
.photo-info hr:nth-of-type(2){
    margin:10px 0;
}
.photo-info /deep/ .my-gallery{
    width:calc(100vw - 30px);
}
.photo-info /deep/ .my-gallery figure{
    display: inline-block;
    width:33%;
}
.photo-info /deep/ .my-gallery figure a img{
    width: calc(100% - 7px);
    height:auto;
    margin:5px 10px 5px 0;
    border-radius: 6px;
    box-shadow: 0 0 5px #999;
}
</style>