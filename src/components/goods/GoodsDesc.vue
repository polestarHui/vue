<template>
    <div class="goodsdesc-container">
        <h3>商品图文介绍</h3>

        <hr>

        <div class="content" v-html="info.content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            info:{}//图文数据
        };
    },
    created() {
        this.getGoodsDesc();
    },
    methods:{
        getGoodsDesc(){
            this.$http.get().then(result=>{
                if(result.body.Status==0){
                    this.info=result.body.Data[0]
                }
            })
        }
    }

}
</script>
<style lang="scss">
    .goodsdesc-container{
        h3{
            font-size: 16px;
            color: #226aff;
            text-align: center;
            margin: 15px 0;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>