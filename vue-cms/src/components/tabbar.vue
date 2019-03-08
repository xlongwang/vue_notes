<template>
    <nav class="mui-bar mui-bar-tab">
        <router-link to="/home" class="mui-tab-item mui-active">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/member" class="mui-tab-item">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link to="/shopcar" class="mui-tab-item">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link to="/search" class="mui-tab-item">
            <span class="mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
</template>
<script>
export default {
    name: "subnav"
}
</script>
<style lang="scss">

</style>

