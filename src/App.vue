<template>
  <div id="app">
    <el-page-header content="首页"></el-page-header>

    <h1>nb</h1>

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><i class="el-icon-s-home"></i>首页</el-menu-item>
      <el-menu-item index="2"><i class="el-icon-s-custom"></i>会员</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-shopping-cart-2"></i>购物</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-search"></i>搜索</el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>      

<style>
.el-menu{
  position: fixed;
  bottom: 0;
  width:100vw;
  margin-left: -8px;
}
.el-menu li{
  width:25%;
  text-align: center;
}
.el-page-header{
  background-color: #545c64;
  color:#fff;
  margin:-8px;
  height: 35px;
  line-height: 35px;
}
.el-page-header__left div{
  font-size:16px;
}
.el-page-header__content{
  color:#fff;
  position: fixed;
  left:50%;
  transform: translateX(-50%);
}
</style>
