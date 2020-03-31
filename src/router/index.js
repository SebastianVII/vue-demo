import Vue from 'vue'
import Router from 'vue-router'
import home from'../components/tabbar/home.vue'
import member from'../components/tabbar/member.vue'
import search from'../components/tabbar/search.vue'
import shop from'../components/tabbar/shop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/search',component:search},
    {path:'/shop',component:shop},
  ]
})
