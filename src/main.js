// 这是入口文件
import Vue from 'vue'

// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
    // 每次刚进入 网站，肯定会调用main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state: { //this.$store.state.***
        car: car, //将 购物车中的商品的数据，用一个数组存储起来，在car数组中，存储一些商品的对象，咱们可以暂时将这个商品对象，设计成这个样子  
        // {id:商品的ID,count:商品的数量,price:商品的单价，selected:false}
    },
    mutations: { //this.$store.commit('方法的名称','按需传递唯一的参数')
        addToCar(state, goodsinfo) {
            //点击加入购物车，把商品信息，保存到 store 中的 car上
            //   分析：
            // 1、如果购物车中，之前就已经有这个对应的商品了，只需要更新数据
            // 2、如果没有，则直接把 商品数据 push 到 car 中即可

            // 假设 在购物车中，没有找到对应的商品
            var flag = false;

            state.car.some(item => {
                    if (item.id == goodsinfo.id) {
                        item.count += parseInt(goodsinfo.count);
                        flag = true;
                        return true;
                    }
                })
                // 如果最终循环完毕，得到的 flag ，则把商品数据直接 push 到购物车中 
            if (!flag) {
                state.car.push(goodsinfo)
            }

            // 当更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsInfo(state, goodsinfo) {
            // 修改购物车中商品的数量值
            // 分析：
            state.car.some(item => {
                    if (item.id == goodsinfo.id) {
                        item.count = parseInt(goodsinfo.count)
                        return true
                    }
                })
                // 当修改完商品的数量，把最新的购物车数据，保存到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        removeFormCar(state, id) {
            // 根据ID，从store中的购物车中删除对应的那条商品数据
            state.car.some(item => {
                    if (item.id == id) {
                        state.car.splice(i, 1);
                        return true;
                    }
                })
                // 删除完毕后的，最新的购物车数据，同步到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: { //this.$store.getters.***
        // 相当于计算属性  也相当于filters
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        },
        getGoodsCount(state) {
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.count;
            })
            return o;
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        }
    }
})

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

// 全局设置post时候表单数据的格式组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

// 导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 按需导入mint-ui中的组件
// import { Header, Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
// import { Swipe, SwipeItem } from 'mint-ui'
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// import { Lazyload } from 'mint-ui'
// Vue.use(Lazyload)
import MinyUI from 'mint-ui'
Vue.use(MinyUI)
import 'mint-ui/lib/style.css'

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// 导入自己的router.js路由模块
import router from './router.js'

// 导入app组件
import app from './APP.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router, //1.4 挂载路由对象到 VM 实例上
    store, //将store挂载到 VM 实例上（挂载 store 状态管理对象）
})