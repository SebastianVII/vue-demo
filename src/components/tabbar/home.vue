<template>
  <div>

      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in swipeList" :key="item.id">
          <img :src="item.img" alt="">
        </mt-swipe-item>
      </mt-swipe>

      <div class="el">
        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple"><el-button type="success" icon="el-icon-tickets" circle></el-button>新闻资讯</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light"><el-button type="danger" icon="el-icon-picture-outline" circle></el-button>图片分享</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"><el-button type="primary" icon="el-icon-shopping-cart-full" circle></el-button>商品购买</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple"><el-button type="danger" icon="el-icon-s-order" circle class="color-change"></el-button>留言反馈</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light"><el-button type="warning" icon="el-icon-video-camera" circle></el-button>视频专区</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"><el-button type="info" icon="el-icon-s-data" circle></el-button>联系我们</div></el-col>
        </el-row>
      </div>

  </div>
</template>

<script>
export default {
  created(){
    this.getSwipe()
  },
  data(){
    return {
      swipeList:[]
    }
  },
  methods:{
    getSwipe(){
      this.axios.get('http://www.liulongbin.top:3005/api/getlunbo')
      .then(result=>
        result.data.message.splice(1,1)&&result.data.status==0?this.swipeList=result.data.message:alert('error')
      )
    }
  }
}
</script>

<style>
.mint-swipe{
  height:25vh;
  transform: translateZ(0);
}
.mint-swipe-item{
  background-color:grey;
}
img{
  width:100%;
  height:100%;
}
.el{
  margin-top:20px;
}
.grid-content{
  height:150px;
  font-size: 15px;
  text-align: center;
  color:rgb(126, 126, 126);
  display: flex;
  flex-direction: column;
  line-height: 60px;
}
.grid-content i{
  font-size: 32px;
  padding-top:3px;
  font-weight: 10;
}
.el-button{
  width:70px;
  height:70px;
  margin:0 auto;
  margin-top:12px;
}
.color-change{
  background-color:rgb(123, 211, 233);
  border-color:rgb(123, 211, 233);
}
</style>