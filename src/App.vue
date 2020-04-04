<template>
  <div id="app-container">

    <el-page-header content="首页"></el-page-header>

    <transition>
      <router-view></router-view>
    </transition>

    <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to='/home'><i class="el-icon-s-home"></i>首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to='/member'><i class="el-icon-s-custom"></i>会员</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to='/shop'><i class="el-icon-shopping-cart-2"></i>购物<mt-badge type="error" id="badge">1</mt-badge></router-link></el-menu-item>
      <el-menu-item index="4"><router-link to='/search'><i class="el-icon-search"></i>搜索</router-link></el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>      

<style lang="scss">
*{
  margin:0;
  padding:0;
}
#app-container{
  overflow-x: hidden;
  position: relative;
  padding-bottom: 60px;
  padding-top: 45px;
  .el-menu--horizontal>.el-menu-item a, .el-menu--horizontal>.el-menu-item a:hover {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    position: relative;
    i{
      width:auto;
      font-size: 25px;
      margin:8px 0 -20px 0;
    }
    .mint-badge{
        border-radius: 50%;
        height:14px;
        width:14px;
        position: absolute;
        z-index: 99;
        padding:0;
        background: #f15954;
        font-size:12px;
        line-height: 14px;
        color:white;
        text-align: center;
        top:2px;
        right: calc(50% - 1.3em);
        transform: translateX(50%);
      }
  }
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
  position: relative;
  left:50%;
  transform: translateX(-50%);
}
.el-page-header__left{
  display: none;
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
