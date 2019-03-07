import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import account from './main/account.vue'
import goodlist from './main/goodlist.vue'

import login from './subComponent/login.vue'
import regist from './subComponent/regist.vue'

const router = new VueRouter({
    routes: [
       { 
           path:'/account', 
           component: account,
           children:[
               {path:'login', component: login},
               {path:'regist', component: regist}
           ] 
         },
       { path:'/goodlist', component: goodlist }
    ]
})

export default router