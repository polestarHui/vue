// 这是入口文件
import Vue from 'vue'

// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

// 导入格式化的时间插件
import moment from 'moment'

// 定义全局的过滤器
Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

// 2.1导入 vue-resource
import VueResource from 'vue-resource'
// 2.2安装vue-resource
Vue.use(VueResource)
    // 设置请求的根路径
Vue.http.options.root = ' http://www.barteam.cn:8086'

// 导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 按需导入mint-ui中的组件
import { Header, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入自己的router.js路由模块
import router from './router.js'

// 导入app组件
import app from './APP.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //1.4 挂载路由对象到 VM 实例上
})