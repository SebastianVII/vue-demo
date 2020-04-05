// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import moment from 'moment'

import VuePreview from 'vue-preview'

import Vuex from 'vuex'

Vue.config.productionTip = false
axios.defaults.baseURL="http://www.liulongbin.top:3005"
Vue.use(ElementUI);
Vue.use(MintUI)
Vue.use(VueAxios, axios)
Vue.use(VuePreview)
Vue.use(Vuex)

Vue.filter('time',function(data, pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(data).format(pattern)
})

let store=new Vuex.Store({
  state:{//data
    shopCar:JSON.parse(localStorage.getItem('shopCar') || '[]')//{id:  cnt:  price:  selected:  }
  },
  mutations:{//methods
    addShopCar(state,goods){
      state.shopCar.some(item=>{
          if(item.id==goods.id){
              item.cnt+=parseInt(goods.cnt)
              return true
          }
      })?null:state.shopCar.unshift(goods)

      localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    },
    updateCnt(state,goods){
      state.shopCar.some(item=>{
        if(item.id==goods.id){
            item.cnt=parseInt(goods.cnt)
            return true
        }
      })

      localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    },
    removeShopCar(state,id){
      state.shopCar.some((item,i)=>{
        if(item.id==id){
            state.shopCar.splice(i,1)
            return true
        }
      })

      localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    },
    updateSelected(state,id){
      state.shopCar.forEach(item=>{
        if(item.id==id){
          item.selected=!item.selected
          return true
        }
      })

      localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    }
  },
  getters:{
    allCnt(state){
      let allcnt=0
      state.shopCar.forEach(item=>allcnt+=item.cnt)
      return allcnt>99?'99+':allcnt
    },
    goodsCnt(state){
      let goodscnt={}
      state.shopCar.forEach(item=>goodscnt[item.id]=item.cnt)
      return goodscnt
    },
    goodsSelected(state){
      let goodsselected=[]
      state.shopCar.forEach(item=>item.selected?goodsselected.push(item.id):null)
      return goodsselected
    },
    selectedCntAndAmount(state){
      let ca={cnt:0,amount:0}
      state.shopCar.forEach(item=>{
        if(item.selected){
          ca.cnt+=item.cnt
          ca.amount+=item.price*item.cnt
        }
      })
      return ca
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:c=>c(App),
  router,
  store,
})
