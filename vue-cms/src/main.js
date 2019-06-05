import Vue from "vue"
import app from "./App.vue"

import VueRouter from "vue-router"

import router from "./router.js"

// 2.1 导入 vue-resource
import vueResource from "vue-resource"

// 2.2 安装 vue-resource
Vue.use(vueResource)

//2.3  设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io'


import "mint-ui/lib/style.css"
import "./lib/css/mui.min.css"
import "./lib/css/icons-extra.css"

import {
    Header,
    Swipe,
    SwipeItem
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

process.env.NODE_ENV == 'mork' && require('./mork/mock.js');

const vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})