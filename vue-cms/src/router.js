import Vue from "vue"
import VueRouter from "vue-router"

import homeContainer from "./components/subContainer/homeContainer.vue"
import memberContainer from "./components/subContainer/memberContainer.vue"
import shopcarContainer from "./components/subContainer/shopcarContainer.vue"
import searchContainer from "./components/subContainer/searchContainer.vue"

Vue.use(VueRouter)

const router = new VueRouter({
   routes: [
        {path:'/', redirect:'/home'}, // 路由重定向
        {path:'/home', component: homeContainer},
        {path:'/member', component: memberContainer},
        {path:'/shopcar', component: shopcarContainer},
        {path:'/search', component: searchContainer}
   ]
})

export default router