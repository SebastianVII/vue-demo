<template>
  <div class="goods-item">

      <swiper :swipeList="swipeList"></swiper>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{goodsInfo.title}}</span>
        </div>
        <div class="text item">
            <p class="price">
                <span class="market">市场价：<del>￥{{goodsInfo.market_price}}</del></span>
                <span class="sell">销售价：<span>￥{{goodsInfo.sell_price}}</span></span>
            </p>
            <p class="buy">购买数量：
                <template>
                    <el-input-number v-model="selectedNum" :min="1" :max="goodsInfo.stock_quantity" label="购买数量" size="mini"></el-input-number>
                    <transition
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @after-enter="afterEnter">
                        <div class="ball" v-show="ballShow"></div>
                    </transition>
                </template>
            </p>
            <p class="btn">
                <el-button type="danger" @click="addCarShop">加入购物车</el-button>
                <el-button type="primary">立即购买</el-button>
            </p>
        </div>
      </el-card>

      <el-card class="box-card card2">
        <div slot="header" class="clearfix">
            <span>商品信息</span>
        </div>
        <div class="text item">
            <p>商品货号：{{goodsInfo.goods_no}}</p>
            <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
            <p>上架时间：{{goodsInfo.add_time | time}}</p>
            <p>
                <el-button type="danger" plain @click="goDesc(id)">图文介绍</el-button>
                <el-button type="primary" plain @click="goComment(id)">商品评论</el-button>
            </p>
        </div>
      </el-card>

  </div>
</template>

<script>
import swiper from '../sub/swiper.vue'

export default {
    created(){
        this.getSwipe()
        this.getGoodsInfo()
    },
    data(){
        return {
            id:this.$route.params.id,
            swipeList:[],
            selectedNum:1,
            goodsInfo:{},
            ballShow:false
        }
    },
    methods:{
        getSwipe(){
            this.axios.get('api/getthumimages/'+this.id)
            .then(resolve=>{
                resolve.data.status==0?
                resolve.data.message.forEach(item=>item.img=item.src)
                :alert('error')

                this.swipeList=resolve.data.message
            })
        },
        getGoodsInfo(){
            this.axios.get('api/goods/getinfo/'+this.id)
            .then(resolve=>
                resolve.data.status==0?this.goodsInfo=resolve.data.message[0]:alert('error')
            )
        },
        goDesc(id){
            this.$router.push({name:'goodsdesc',params:{id}})
        },
        goComment(id){
            this.$router.push({name:'goodscomment',params:{id}})
        },
        addCarShop(){
            this.ballShow=!this.ballShow
            
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)"
        },
        enter(el,done){
            el.offsetWidth

            const ballPosition=el.getBoundingClientRect()
            const badgePosition=document.querySelector('#badge').getBoundingClientRect()
            const x=badgePosition.left-ballPosition.left
            const y=badgePosition.top-ballPosition.top
            
            el.style.transform=`translate(${x}px,${y}px)`
            el.style.transition='all .7s cubic-bezier(.4,-0.3,1,.68)'
            done()
        },
        afterEnter(el){
            this.ballShow=!this.ballShow
        }
    },
    components:{
        swiper
    }
}
</script>

<style lang="scss">
.goods-item{
    .el-card{
        border-radius: 0;
        margin-bottom: 15px;
        overflow: visible;
        .el-card__header{
            font-size:18px;
            color:#333;
            font-weight: bolder;
            padding:5px 18px;
        }
        .el-button{
            height:2.5em;
            padding:0;
            margin:0 10px 0 0;
            width:7em;
        }
        .el-card__body{
            .text.item{
                color:#777;
                p{
                    margin-bottom:10px;
                }
                .price{
                    .sell{
                        span{
                            color:rgb(255, 62, 28);
                            font-size: 18px;
                            font-weight: bolder;
                        }
                    }
                }
                .btn{
                    display: flex;
                }
                .buy{
                    position: relative;
                    .ball{
                        width:15px;
                        height:15px;
                        border-radius: 50%;
                        background-color:#f15954;
                        position: absolute;
                        z-index: 99;
                        bottom:0.5em;
                        left:calc(5em + 65px);
                        transform:translateX(-50%) ;
                    }
                }
            }
        }
    }
    .el-card.card2{
        .el-button{
            width:calc(100vw - 40px);
            margin:0 0 13px 0;
        }
    }
}
</style>