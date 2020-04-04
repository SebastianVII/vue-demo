<template>
  <div>

      <comment :id="$route.params.id"></comment>

  </div>
</template>

<script>
import comment from '../sub/comment.vue'
export default {
    components:{
        comment
    }
}
</script>

<style lang="scss" scoped>
div{
    padding:15px;
}
</style>