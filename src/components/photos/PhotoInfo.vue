<template>
    <div class="photoinfo_container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
        <span>市场价：{{photoinfo.market_price}}</span>
        <span>折后价：{{photoinfo.sell_price}}</span>
        </p>
        <img :src="photoinfo.img_url" alt="">
        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
            <img class="preview-img" v-for="(item,index) in list" :src="item.src" height="100" @click="$preview,open(index,list)" :key="item.src" alt="">
        </div>
        <!-- 图片内容区域 -->
        <div class="'content'"></div>
        <!-- 放置一个现成的评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>
// 1、导入评论子组件
import comment from "../subcomponents/comment.vue"

export default {
    data(){
        return {
            id:this.$route.params.id,//从路由中获取到的 图片的ID
            photoinfo:{},//图片详情
            list:[]
        }
    },
    created() {
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods:{
        getPhotoInfo(){//获取图片的详情
           this.$http.get('goods/goodslist?pageindex=1&pagesize=3').then(result=>{
               if(result.body.Status==0){
                   this.photoinfo=result.body.Data[0];
               }
           })
        },
        getThumbs(){
            //获取缩略图
            this.$http.get('thumbs/'+this.id).then(result=>{
                if(result.body.Status==0){
                    // 循环每个图片数据，补全图片的宽和高
                    result.body.Data.forEach(item=>{
                        item.w=600;
                        item.h=400;
                    });
                    // 把完整的数据保存到list中
                    this.list=result.body.Data;
                }
            })
        }
    },
    components:{
        //注册评论子组件
        'cmt-box':comment
    }
}
</script>
<style lang="scss" scoped>
    .photoinfo_container{
        padding: 3px;
        h3{
            color: #26a2ff;
            text-align: center;
            font-size: 15px;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
        }
        img{
            width: 100%;
            height: 100%;
        }
        .thumbs{
            img{
                margin: 10px;
                box-shadow: 0 0 8px;
            }
        }
    }
</style>
