<template>
  <div id="app">
    <mt-header fixed title="Vue-demo"></mt-header>

    <h1>nb</h1>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <span slot="icon" class="glyphicon glyphicon-home"></span>
        首页
      </mt-tab-item>
      <mt-tab-item id="订单">
        <span slot="icon" class="glyphicon glyphicon-user"></span>
        会员
      </mt-tab-item>
      <mt-tab-item id="发现">
        <span slot="icon" class="glyphicon glyphicon-shopping-cart"></span>
        购物
      </mt-tab-item>
      <mt-tab-item id="我的">
        <span slot="icon" class="glyphicon glyphicon-search"></span>
        搜索
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>      

<style scoped>
#app{
  padding-top:40px;
}
a.mint-tab-item{
  text-decoration: none;
  /* color:grey; */
}
.glyphicon{
  font-size: 20px;
}
</style>
