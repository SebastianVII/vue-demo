<template>
    <div class="photolist-container">
        <el-tabs value="全部" @tab-click="getPhoto">
            <el-tab-pane
                v-for="item in categoryList" 
                :key="item.id" 
                :label="item.title" 
                :name="item.title" 
                :id='item.id'>
                <ul>
                    <router-link :to="'/home/photoinfo/'+item.id" v-for="item in photoList" :key="item.id" tag="li">
                        <img v-lazy="item.img_url">
                        <div class="info">
                            <h4 class="info-title">{{item.title}}</h4>
                            <div class="info-body">{{item.zhaiyao}}</div>
                        </div>
                    </router-link>
                </ul>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    created(){
        this.getCategory()
        this.getPhoto(0)
    },
    data(){
        return {
            categoryList:[],
            photoList:[],
        }
    },
    methods:{
        getCategory(){
            this.axios.get('api/getimgcategory')
            .then(resolve=>{
                resolve.data.status==0?resolve.data.message.unshift({title:'全部',id:0}):alert('error')
                this.categoryList=resolve.data.message
            })
        },
        getPhoto(tab){
            let id= tab==0?0:tab.$attrs['id']
            this.axios.get('api/getimages/'+id)
            .then(resolve=>
                resolve.data.status==0?this.photoList=resolve.data.message:alert('error')
            )
        }
    }
}
</script>

<style scoped lang="css">
.photolist-container /deep/ .el-tabs__nav-scroll{
    overflow: scroll;
}
.photolist-container /deep/ .el-tabs__nav-scroll::-webkit-scrollbar{
    display: none;
}
.photolist-container /deep/ .el-tabs__nav{
    margin:0 10px;
}
.photolist-container /deep/ img[lazy=loading],.photolist-container /deep/ img{
    width: 100%;
    height: auto;
    margin-bottom:10px;
    border-radius: 5px;
    box-shadow: 0 0 9px #999;
}
.photolist-container /deep/ .el-tab-pane li{
    width: calc(100vw - 32px);
    margin:0 auto;
    text-align: center;
    position: relative;
    list-style-type: none;
}
.info{
    width:calc(100vw - 42px);
    margin:0 auto;
    color:white;
    background-color: rgba(85, 85, 85, 0.5);
    padding:5px;
    border-radius: 0 0 5px 5px;
    position: absolute;
    bottom: 15px;
    left:0;
    text-align: left;
    /* max-height: 90px;
    overflow: hidden;
    display:-webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; */
}
.info-title{
    font-size: 17px;
}
.info-body{
    font-size: 12px;
    font-style: italic;
}
</style>