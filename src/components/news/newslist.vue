<template>
  <div>

      <el-collapse accordion>
        <el-collapse-item v-for="item in newsList" :key="item.id">
            <template slot="title">
                <i class="header-icon el-icon-info"></i>{{" "+item.title}}
            </template>
            <router-link :to="'/home/newsinfo/'+item.id">
                <div>{{item.zhaiyao}}</div><br>
                <div>
                    <span>发表时间：{{item.add_time | time}}</span><span>点击：{{item.click}}次</span>
                </div>
            </router-link>
        </el-collapse-item>
    </el-collapse>

  </div>
</template>

<script>
export default {
    created(){
        this.getNews();
    },
    data(){
        return {
            newsList:[]
        }
    },
    methods:{
        getNews(){
            this.axios.get('api/getnewslist')
            .then(resolve=>
                resolve.data.status==0?this.newsList=resolve.data.message:alert('error')
            )
        }
    }
}
</script>

<style>
.el-collapse-item__header, .el-collapse-item__wrap{
    padding:0 16px;
    font-size:17px;
    color:rgb(71, 71, 71);
    font-weight:bolder;
}
.el-collapse-item__header{
    width:calc(100% - 50px);
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    display:inline-block;
}
.el-icon-arrow-right, .el-icon-arrow-right.is-active{
    position: absolute;
    right:10px;
    transform: translateY(100%);
}
.el-icon-arrow-right.is-active{
    transform: translateY(100%) rotate(90deg);
}
.el-collapse-item__content{
    color:rgb(151, 151, 151);
}
.el-collapse-item__wrap div:nth-of-type(2){
    display:flex;
    justify-content: space-between;
}
.el-collapse-item__wrap div:nth-of-type(2) span{
    color:rgb(84, 132, 236);
}
a div{
  color:rgb(151, 151, 151);
}
</style>