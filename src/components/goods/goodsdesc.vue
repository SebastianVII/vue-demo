<template>
  <div class="desc-info">

       <h3>{{desc.title}}</h3>
       <hr>

       <div v-html="desc.content"></div>

  </div>
</template>

<script>
export default {
    created(){
        this.getDesc()
    },
    data(){
        return {
            id:this.$route.params.id,
            desc:{}
        }
    },
    methods:{
        getDesc(){
            this.axios.get('api/goods/getdesc/'+this.id)
            .then(resolve=>
                resolve.data.status==0?this.desc=resolve.data.message[0]:alert('error')
            )
        }
    }
}
</script>

<style lang="scss">
.desc-info{
    padding:0 15px;
    h3{
        color:#555;
        text-align: center;
        margin:10px 0;
    }
    div{
        color:#777;
        font-size: 14px;
        margin:10px 0;
        img{
            width:calc(100vw - 30px);
        }
    }
}
</style>