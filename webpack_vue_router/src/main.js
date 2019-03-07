import Vue from "vue"
import app from "./App.vue"

import VueRouter from "vue-router"

import router from "./router.js"

var vm = new Vue({
    el:"#app",
    render: c => c(app),
    router
})

