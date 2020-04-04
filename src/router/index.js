import Vue from 'vue'
import Router from 'vue-router'
import home from'../components/tabbar/home.vue'
import member from'../components/tabbar/member.vue'
import search from'../components/tabbar/search.vue'
import shop from'../components/tabbar/shop.vue'
import newslist from '../components/news/newslist.vue'
import newsinfo from '../components/news/newsinfo.vue'
import photolist from '../components/photo/photolist.vue'
import photoinfo from '../components/photo/photoinfo.vue'
import goodsinfo from '../components/goods/goodsinfo.vue'
import goodslist from '../components/goods/goodslist.vue'
import goodsdesc from '../components/goods/goodsdesc.vue'
import goodscomment from '../components/goods/goodscomment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/search',component:search},
    {path:'/shop',component:shop},
    {path:'/home/newslist',component:newslist},
    {path:'/home/newsinfo/:id',component:newsinfo},
    {path:'/home/photolist',component:photolist},
    {path:'/home/photoinfo/:id',component:photoinfo},
    {path:'/home/goodslist',component:goodslist},
    {path:'/home/goodsinfo/:id',component:goodsinfo},
    {path:'/home/goodsdesc/:id',component:goodsdesc,name:'goodsdesc'},
    {path:'/home/goodscomment/:id',component:goodscomment,name:'goodscomment'},
  ]
})
