<template>
  <div class="goods-container">  
      
      <router-link :to="'/home/goodsinfo/'+item.id" tag='div' class="goods-item" v-for="item in goodsList" :key="item.id">
          <img :src="item.img_url" alt="">
          <h2>{{item.title}}</h2>
          <div class="goods-info">
              <p class="price">
                  <span class="now">￥{{item.sell_price}}</span><br>
                  <span class="old">价格￥{{item.market_price}}</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩余{{item.stock_quantity}}件</span>
              </p>
          </div>
      </router-link>
      <el-button type="danger" icon="el-icon-plus" plain @click="loadMore">加载更多</el-button>
       
  </div>
</template>

<script>
export default {
    created(){
        this.getGoods()
    },
    data(){
        return {
            pageIndex:1,
            goodsList:[]
        }
    },
    methods:{
        getGoods(){
            this.axios.get('api/getgoods?pageindex='+this.pageIndex)
            .then(resolve=>
                resolve.data.status==0?this.goodsList=this.goodsList.concat(resolve.data.message):alert('error')
            )
        },
        loadMore(){
            this.pageIndex++
            this.getGoods()
        }
    }
}
</script>

<style scoped lang="scss">
.goods-container{
    // column-count: 2;
    // column-gap: 10px;
    padding:10px 0;
    display: flex;
    flex-wrap: wrap;
    width:100vw;
    .goods-item{
        background-color: rgba(241, 241, 241, 0.795);
        width:calc(50vw - 15px);
        min-height: 250px;
        margin-bottom:12px;
        margin-left: 10px;
        box-shadow:0 0 5px #999;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // break-inside: avoid;
        img{
            width:100%;
            height: auto;
        }
        h2{
            color:#444;
            margin:0 5px;
            font-size: 17px;
            // width:calc(100% - 10px);
            word-break: break-all;
        }
        .goods-info{
            font-size: 14px;
            margin:5px 5px;
            .price{
                margin-bottom:5px;
                .now{
                    color:rgb(255, 37, 21);
                    font-size: 20px;
                    font-weight: 900;
                }
                .old{
                    text-decoration: line-through;
                    color:#999;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                color:#333;
                font-style: italic;
            }
        }
    }
    .el-button{
        width:calc(100% - 20px);
        margin:0 0 0 10px;
        height:40px;
    } 
}
</style>