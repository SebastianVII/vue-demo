<template>
  <div>

      <swiper :swipeList="swipeList"></swiper>

      <div class="el">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <router-link to="/home/newslist"><el-button type="success" icon="el-icon-tickets" circle></el-button></router-link>新闻资讯
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light">
              <router-link to="/home/photolist"><el-button type="danger" icon="el-icon-picture-outline" circle></el-button></router-link>图片分享
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <router-link to="/home/goodslist"><el-button type="primary" icon="el-icon-shopping-cart-full" circle></el-button></router-link>商品购买
            </div>
          </el-col>
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
import swiper from '../sub/swiper.vue'

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
      this.axios.get('api/getlunbo')
      .then(resolve=>
        resolve.data.message.splice(1,1)&&resolve.data.status==0?this.swipeList=resolve.data.message:alert('error')
      )
    }
  },
  components:{
    swiper
  }
}
</script>

<style>
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