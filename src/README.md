#这是我的第一个项目

##一定可以成功

###有灵魂的代码

####接着编,bianbxiaiqu lashdl;fasd

##用传统的方式把修改过后的代码上传到GitHub上？
1、git add .
2、git commit -m "提交信息"
3、git push


##制作首页中的APP组件
1、完成header区域，使用的是mint-ui中的header组件
2、制作底部的tabbar区域，使用的是mui的tabbar.html
 +在制作 购物车 小图标的时候，操作会相对多一些：
 +先把 扩展图标的css样式，拷贝到项目中
 +拷贝 扩展字体库 ttf 到项目中
 +为 购物车 小图标，添加 如下样式 ‘mui-icon mui-icon-extra mui-icon-extra-cart’
3、要在中间区域放置一个router-view来展示路由匹配到的组件

##改造tabbar为router-link

##设置路由高亮

##点击tabbar中的路由链接，展示对应的组件

##制作首页轮播图

##加载 首页轮播图数据
1、获取数据，如何获取呢，使用vue-resource
2、使用vue-resource 的 this.$http.get 获取数据
3、获取到的数据，要保存到data身上
4、使用v-for循环渲染每个item项

##改造九宫格区域的样式

##改造新闻资讯路由链接

##新闻资讯页面制作
1、绘制界面，使用mui中的media-list.html
2、使用vue-resource 获取数据
3、渲染真实数据

##实现新闻资讯列表 点击跳转到新闻详情
1、把列表中的每一项改造为router-link，同时，在跳转的时候应该提供唯一的ID标识符
2、创建新闻详情的组件页面 NesInfo.vue
3、在路由模块中，将新闻详情的路由地址和组件页面对应起来

##实现 新闻详情 的 页面布局 和 数据渲染

##单独封装一个 comment.vue 评论子组件
1、先创建一个 单独的 comment.vue 组件末班
2、在需要使用 comment 组件的 页面中，先 手动 导入 comment 组件
 +`import comment from './comment.vue'`
3、在父组件中，使用 `components`属性，将刚才导入 comment 组件，注册为自己的 子组件
4、将注册子组件的 注册名称，以 标签形式，在页面中 引用即可

##获取所有的评论数据显示到页面中

##实现点击加载更多评论的功能
1、为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2、点击加载更多，让pageIndex++，然后重新调用 this.getComments() 方法重新获取最新一页的数据
3、为了防止新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取到新数据，应该让老数据调用 数组的 concat 方法，拼接上新数组