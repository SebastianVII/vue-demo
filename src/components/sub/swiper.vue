<template>
  <div>
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in swipeList" :key="item.id">
          <img :src="item.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
export default {
    props:['swipeList']
}
</script>

<style>
.mint-swipe{
  height:25vh;
  transform: translateZ(0);
}
.mint-swipe-item{
  background-color:white;
}
img{
  width:100%;
  height:100%;
}
</style>