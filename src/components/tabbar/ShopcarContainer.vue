<template>
  <div class="shopcar-container">
    <!-- 列表项区域 -->
    <div class="goods-list">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img src="https://avatars3.githubusercontent.com/u/44837485?s=40&v=4">
            <div class="info">
                <h1>小米手机 双网通</h1>
                <p>
                   <span class="price">￥2199</span> 
                   <numbox ></numbox>
                   <!-- <numbox :initcount="$store.getters.getGoodsCount[item.id]"></numbox> -->
                   <!-- 问题：如何从购物车中获取商品的数量呢 -->
                   <!-- 1、我们可以先创建一个 空对象，然后循环购物车中所有商品的数据，把 当前循环这条商品的 ID ，作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象：{88:2,89:1,94:4} -->
                   <a href="#" >删除</a>
                    <!-- <a href="#" @click.prevent="remove(item.id,i)">删除</a> -->
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 列表结算区域 -->
    <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">0</span> 件，总价 <span class="red">￥0</span></p>
            </div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
  data(){
    return {
      goodslist:[],//购物车中所有商品的数据
    }
  },
  methods: {
    getGoodsList(){
      // 1、获取到store中所有的商品的ID，然后拼接出一个 用逗号分隔的 字符串
      var idArr=[];
      this.$store.state.car.forEach(item=>idArr.push(item.id));
      // 如果 购物车中没有商品，则直接返回，需要请求数据接口，否则会报错
      if(idArr.length<=0){
        return;
      }
      //获取购物车商品列表
      this.$http.get('').then(result=>{
        if(result.body.Status==0){
          this.goodslist=result.body.Data;
        }
      })
    },
    remove(id,index){
      // 点击删除，把商品从store中根据 传递的 ID 删除，同时，把当期那组件中的goodslist中，对应要删除的那个商品，使用index删除
      this.goodslist.splice(index,1);
      this.$store.commit('removeFormCar',id);
    }
  },
    components:{
        numbox
    }
};
</script>
<style lang="scss" >
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        .mui-card-content-inner{
            display: flex;
            justify-content: space-between;
        }
       img{
            width: 60px;
            height: 60px;
       }
       h1{
           font-size: 13px;
       }
       .info{
         display: flex;
         flex-direction: column;
         justify-content: space-between;
           .price{
               color: red;
               font-weight: bold; 
           }
       }
    }
    .jiesuan{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .red{
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
    }
    
}
</style>