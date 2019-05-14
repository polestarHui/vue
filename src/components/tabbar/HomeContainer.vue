<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话， 一定要是用key -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img_url" alt="" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格到六宫格的改造工程 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-share"
            ><span class="mui-badge">5</span></span
          >
          <div class="mui-media-body">图片分享</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
          <div class="mui-media-body">留言反馈</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-computer"></span>
          <div class="mui-media-body">视频专区</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div></a
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图数据的方法
      this.$http.get("sliderlist").then(result => {
        // console.log(result.body);
        if (result.body.Msg === "ok") {
          // 成功了
          this.lunbotuList = result.body.Data;
          // Toast('加载轮播图')
        } else {
          // 失败的
          Toast("加载轮播图失败");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  margin-bottom: 50px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-clip: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: pink;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  .mui-table-view-cell {
    border: none;
    .mui-icon-home {
      color: green;
    }
    .mui-icon-extra-share {
      color: #f54171;
    }
    .mui-icon-chatbubble {
      color: #1391ef;
    }
    .mui-icon-extra-order {
      color: #8ed0f1;
    }
    .mui-icon-extra-computer {
      color: #ef2d18;
    }
    .mui-icon-phone {
      color: #f99842;
    }
    .mui-media-body {
      color: #000;
      font-size: 13px;
    }
  }
}
</style>