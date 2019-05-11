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