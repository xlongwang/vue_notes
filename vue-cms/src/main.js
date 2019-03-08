import Vue from "vue"
import app from "./App.vue"

import VueRouter from "vue-router"

import router from "./router.js"
import vueResource from "vue-resource"

Vue.use(vueResource)


import "mint-ui/lib/style.css"
import "./lib/css/mui.min.css"
import "./lib/css/icons-extra.css"

import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

const vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})