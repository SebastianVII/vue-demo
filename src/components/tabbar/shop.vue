<template>
  <div class="shop-container">
      
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>购物车：</span>
      </div>

      <el-checkbox-group 
        v-model="selecteds"
        :min="0">
        <el-checkbox 
          v-for="(item,i) in goodsList" 
          :label="JSON.stringify(item.id)" 
          :key="item.id"
          @change="updateSelected(item.id)">
          <img :src="item.thumb_path" alt="">
          <div class="info">
            <h2>{{item.title}}</h2>
            <p @click.prevent>
              <span class="price">￥{{item.sell_price}}</span>
              <span class="num">
                <el-input-number 
                  v-model="cnts[item.id]" 
                  :min="1" 
                  :label="item.title" 
                  size="small"
                  @change="updateCnt(item.id)">
                </el-input-number>
                <a href="javascript:;" @click.prevent="removeShopCar(item.id,i)">删除</a>
              </span>
            </p>
          </div>
        </el-checkbox>
      </el-checkbox-group>

    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>结算：</span>
      </div>
      <div class="submit">
        <div class="left">
          <p>总计（不含运费）</p>
          <p>
            已勾选<span>{{$store.getters.selectedCntAndAmount.cnt}}</span>件商品，总价<span>￥{{$store.getters.selectedCntAndAmount.amount}}</span>
          </p>
        </div>
        <el-button type="danger" round>去结算</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  created(){
    this.getGoodsList()
  },
  data(){
    return {
      checkedCities: [],
      goodsList:[],
      cnts:this.$store.getters.goodsCnt,
      selecteds:this.$store.getters.goodsSelected,
    }
  },
  methods:{
    getGoodsList(){
      let idArr=[]
      this.$store.state.shopCar.forEach(item=>idArr.push(item.id))
      if(idArr.length==0)return;

      this.axios.get('api/goods/getshopcarlist/'+idArr.join(','))
      .then(resolve=>
        resolve.data.status==0?this.goodsList=resolve.data.message:alert('error')
      )
    },
    updateCnt(updateId){
      this.$store.commit('updateCnt',{id:updateId,cnt:this.cnts[updateId]})
    },
    removeShopCar(id,i){
      this.goodsList.splice(i,1)
      this.$store.commit('removeShopCar',id)
    },
    updateSelected(id){
      this.$store.commit('updateSelected',id)
    }
  }
}
</script>

<style lang="scss">
.shop-container{
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
          color:#777;
          padding: 0;
        }
        .el-checkbox-group{
          .el-checkbox{
            width:100%;
          }
          .el-checkbox__label{
            display: flex;
            width:calc(96% - 1.6em);
            height:13vh;
            position: relative;
            border-bottom: 1px solid #ddd;
            padding:10px 0 10px calc(4% + 1.6em);
            img{
              height:100%;
              width:calc(13vh - 20px);
            }
            .info{
              display: inline-block;
              height:100%;
              margin:0 auto;
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              width: calc((100% - 13vh -20px) * 0.9);
              h2{
                color:#333;
                font-size:17px;
                font-weight: bold;
                max-width: 100%;
                white-space: normal;
              }
              p{
                display: flex;
                justify-content: space-between;
              }
              span.price{
                color:#f15954;
                font-weight: 900;
                font-size: 18px;
                line-height: 30px;
              }
              .el-input-number--small{
                width:100px;
              }
              a{
                color:#5484ec;
                font-size: 16px;
                font-weight: 300;
              }
            }
          }
          .el-checkbox__input .el-checkbox__inner,
          .el-checkbox__input {
            width:1.5em;
            height:1.5em;
            border-radius: 50%;
            line-height: 1.5em;
            font-size: 1em;
            border-color:#999;
            border-width: 2px;
            background: rgba(255, 255, 255, 0);
            transition: none;
            -webkit-transition: none;
            position: absolute;
            top:50%;
            left:2%;
            transform: translateY(-50%);
          }
          .el-checkbox__input.is-checked .el-checkbox__inner,
          .el-checkbox__input.is-checked {
            background: #f15954;
            border-color: #f15954;
            .el-checkbox__inner::after {
              border-width: 2px;
              height: 10px;
              width: 4px;
              left: 5px;
              top: 0.5px;
            }
          }
        }
        .submit{
          height:13vh;
          width:94vw;
          margin:0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left{
            p{
              &:nth-child(1)::after{
                content: '';
                display: block;
                height:0.7em;
                width:1%;
              }
              span{
                color:#f15954;
                font-size: 18px;
                font-weight: 900;
                margin:0 5px;
              }
            }
          }
        }
  }
}
</style>