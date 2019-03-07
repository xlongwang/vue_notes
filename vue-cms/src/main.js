import Vue from "vue"
import app from "./App.vue"

import "mint-ui/lib/style.css"

import "./lib/css/mui.min.css"

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

const vm = new Vue({
    el: "#app",
    render: c => c(app)
})