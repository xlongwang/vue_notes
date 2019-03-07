import Vue from 'vue'
import login from "./login.vue"

var vm = new Vue({
    el:'#app',
    data(){
        return{
            msg: '123'   
        }
    },
    render: c=>c(login)
})
