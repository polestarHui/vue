<template>
  <div>
    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media"
        v-for="item in newslist"
        :key="item.id"
      >
        <router-link :to="'/home/newsinfo/' + item.id">
          <img
            class="mui-media-object mui-pull-left"
            src="https://avatars3.githubusercontent.com/u/44837485?s=40&v=4"
          />
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>{{ item.author }}</span>
              <span>{{ item.click_count }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <h3>新闻列表页面</h3>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: [] //这是新闻列表
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      //获取新闻列表
      this.$http.get("news/newslist?pageindex=2&pagesize=3").then(result => {
        if (result.body.Status === 0) {
          // 如果没有失败，应该把数据保存到data上
          this.newslist = result.body.Data;
          console.log(this.newslist);
        } else {
          Toast("获取新闻列表失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>