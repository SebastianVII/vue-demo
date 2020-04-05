<template>
  <div id="app-container">

    <el-page-header content="首页" :id="isHome?'head':''" @back="goBack"></el-page-header>

    <transition>
      <router-view></router-view>
    </transition>

    <el-menu
      :default-active="getDefault()"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to='/home'><i class="el-icon-s-home"></i>首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to='/member'><i class="el-icon-s-custom"></i>会员</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to='/shop'><i class="el-icon-shopping-cart-2"></i>购物<mt-badge type="error" id="badge" :style="$store.getters.allCnt?'':'opacity:0'">{{$store.getters.allCnt}}</mt-badge></router-link></el-menu-item>
      <el-menu-item index="4"><router-link to='/search'><i class="el-icon-search"></i>搜索</router-link></el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.$route.path=='/home'?this.isHome=true:this.isHome=false
  },
  data(){
    return {
      defaultPath:[
        /^\/home/,
        /^\/member/,
        /^\/shop/,
        /^\/search/,
      ],
      isHome:false
    }
  },
  methods:{
    getDefault(){
      return JSON.stringify(this.defaultPath.findIndex(item=>this.$route.path.search(item)==0)+1)
    },
    goBack(){
      this.$router.go(-1)
    }
  },
  watch:{
    '$route.path'(newVal){
      newVal=='/home'?this.isHome=true:this.isHome=false
    }
  }
}
</script>      

<style lang="scss">
@font-face{
  font-family: 'OperatorMono';
  
  src:url('./fonts/OPERATORMONO-BOOK.otf');
  src:url('./fonts/OPERATORMONO-BOOKITALIC.otf');
  // src:url('./fonts/OPERATORMONO-MEDIUMITALIC.otf');
  // src:url('./fonts/OPERATORMONO-MEDIUM.otf');
  // src:url('./fonts/OPERATORMONO-BOLD.otf');
  // src:url('./fonts/OPERATORMONO-BOLDITALIC.otf');
  // src:url('./fonts/OPERATORMONO-LIGHT.otf');
  // src:url('./fonts/OPERATORMONO-LIGHTITALIC.otf');
  // src:url('./fonts/OPERATORMONO-XLIGHT.otf');
  // src:url('./fonts/OPERATORMONO-XLIGHTITALIC.otf');
}
*{
  margin:0;
  padding:0;
  font-family:'OperatorMono','Microsoft JhengHei';
}
#app-container{
  overflow-x: hidden;
  position: relative;
  padding-bottom: 60px;
  padding-top: 45px;
  .el-menu--horizontal>.el-menu-item a, .el-menu--horizontal>.el-menu-item a:hover {
    display: flex;
    flex-direction: column;
    font-size: 11px;
    position: relative;
    i{
      width:auto;
      font-size: 25px;
      margin:8px 0 -20px 0;
    }
    .mint-badge{
        border-radius:7px;
        height:14px;
        min-width:10px;
        position: absolute;
        z-index: 99;
        padding:0 2px;
        background: #f15954;
        font-size:11px;
        line-height: 14px;
        color:white;
        text-align: center;
        top:2px;
        right: calc(50% - 1.3em);
        transform: translateX(50%);
      }
  }
}
#head .el-page-header__left{
  display: none;
}
.el-menu{
  position: fixed;
  z-index: 99;
  bottom: 0;
  width:100vw;
}
.el-menu li{
  width:25%;
  text-align: center;
}
.el-page-header{
  background-color: #545c64;
  color:#fff;
  height: 45px;
  line-height: 45px;
  position: fixed;
  z-index: 99;
  top:0;
  width:100vw;
}
.el-page-header__content{
  color:#fff;
  position: absolute;
  left:50%;
  transform: translateX(-50%);
}
.el-page-header__left{
  margin-left: 10px;
  i,div{
    font-size: 16px;
    font-weight: 300;
    color:#ccc;
    margin-right: -5px;
  }
}
.el-page-header__left::after{
  height:22px;
  background-color:#ccc;
  margin-left: -5px;
}
a, .router-link-exact-active, .router-link-active{
  text-decoration: none;
}
</style>
<style scoped>
.v-enter{
  opacity:0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity:0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,.v-leave-active{
  transition: all .5s ease;
}
</style>
