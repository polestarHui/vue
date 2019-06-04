<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <!-- <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
            <img :src="item.img_url" alt="">
          </a>
        </div>
      </div>
    </div> -->
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.srcId" tag="li">
        <img src="" alt="" v-lazy="item.img_url">
      </router-link>
    </ul>
  </div>
</template>
<script>
// 1、导入mui的js文件
// import mui from '../../lib/mui/js/mui.min.js'

export default {
  data(){
    return {
      list:[]//图片列表的数组
      // cates:[],//所有分类的 数组
      // id:93
    }
  },
  created() {
    // this.getAllCategory()
    this.getPhotoList()
  },
//   mounted() {//当组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
//   // 如果要操作元素，最好在 mounted 里面，因为，这时候的 DOM 元素 是最新的
//     // 2、初始化滑动控件
// mui('.mui-scroll-wrapper').scroll({
//   deceleration:0.005//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值为0.006
// })
//   },
  methods:{
    // getAllCategory(){
    //   //获取所有的图片分类
    //   this.$http.get('thumbs/93').then(result=>{
    //     if(result.body.Status==0){
    //       this.cates=result.body.Data
    //     }
    //   })
    // }
    getPhotoList(){
      // 根据ID，获取图片的列表
      this.$http.get("thumbs/91").then(result=>{
        if(result.body.Status==0){
          this.list=result.body.Data
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
// 提高滑动的流畅度
// *{
//   touch-action: pan-y;
// }
.photo-list{
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li{
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    // 消除图片下面的那三个像素值
    vertical-align: middle;
    box-shadow: 0 0 09px #999;
    img{
      width: 100%;
    }
    img[lazy="loading"]{
  width: 40px;
  height: 300px;
  margin: auto;
   }
  }
}

</style>