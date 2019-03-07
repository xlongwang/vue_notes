<template>
    <div>
         <h1>这个 App 组件</h1>
         <router-link to="/account">account</router-link>
         <router-link to="/goodlist">goodlist</router-link>

         <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

