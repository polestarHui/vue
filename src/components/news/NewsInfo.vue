<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>作者：{{newsinfo.author}}</span>
            <span>发表时间：{{newsinfo.add_time|dataFormat}}</span>
            <span>点击：{{newsinfo.click_count}}</span>
        </p>
        <p class="subimg">
            <img :src="newsinfo.img_url" alt="">
        </p>

        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content"></div>

        <!-- 评论子组件区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
// 1、导入 评论子组件
import comment from '../subcomponents/comment.vue'


import { Toast } from "mint-ui";
export default {
    data(){
        return {
            id:this.$route.params.id,//将 URL 地址中传递过来的 ID值，挂载到data上，方便以后调用
            newsinfo:{}//新闻对象
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){//获取新闻详情
            this.$http.get('news/newsinfo?newsid='+this.id).then(result=>{
                if(result.body.Status==0){
                    this.newsinfo=result.body.Data[0]
                }else{
                    Toast('获取新闻失败！')
                }
            })
        }
    },
    components:{//用来注册子组件
        'comment-box':comment
    }
}
</script>

<style lang="scss" >
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226fff;
            display: flex;
            margin-left: 10px;
            margin-right: 10px;
            justify-content: space-between;
        }
        .subimg{
            img{
                width: 100%;
                // height: 100%;
            }
        }
    }
</style>