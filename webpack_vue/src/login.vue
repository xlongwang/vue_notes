<template>
     <h1>这是一个登录组件---{{ msg }}</h1>
</template>
<style>

</style>

<script>
     export default {
          data(){
               return{
                    msg: "123"
               }
          },
          methods:{
               show(){
                    console.log("调用了 login.vue 中的show方法")
               }
          }
     }
</script>
