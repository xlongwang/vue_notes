<template>
    <div class="section_wp">
          <mt-header fixed title="超市"></mt-header>
          <div class="vue-container">
                <transition>
                    <router-view></router-view>
                </transition>
          </div>
         <tabbar></tabbar>     
    </div>
</template>


<script>
    import tabbar from "./components/tabbar.vue"
    export default {
        name: "app",
        components: {
            tabbar
         }
    }
</script>

<style scoped lang="scss">
    .section_wp{
        overflow-x: hidden
    }
    .vue-container{
        padding-top: 40px;
        padding-bottom: 60px;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%); 
    }

     .v-leave-to{
        opacity: 0;
        transform: translateX(-100%); 
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active{
        transition: all .3s ease;
    }
</style>


