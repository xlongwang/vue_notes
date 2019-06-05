<template>
     <div class="sub_Info">
           <h1>{{ newsInfos.info.title }}</h1>
           <div class="sub_title">

                <span>发表时间：<template>{{ newsInfos.info.time }}</template></span>
                <span>点击<template>{{ newsInfos.info.click }}</template>次</span>
           </div>
           <div class="sub_container">
                 {{ newsInfos.info.content }}
           </div>
     </div>
</template>
<script>
    import Vue from 'vue'
    import Router from 'vue-router'
    import { Toast } from 'mint-ui'
    export default {
        data(){
            return {
                id: this.$route.params.id,
                newsInfos:{}
            }
        },
        methods:{
            getNew(){
               this.$http.get('http://newsList.json').then(result => {
                 
                 if(result.body.status ===0 ){
                    let newsInfo = result.body.message;
                    var newsTmp = {};
                    this.$set(newsTmp, 'info', {
                         id: newsInfo.id,
                         title: newsInfo.title,
                         content: newsInfo.content,
                         time: newsInfo.date + newsInfo.add_time,
                         click: newsInfo.click
                    })

                    this.newsInfos = newsTmp
                 }else{
                     Toast('获取新闻列表失败！')
                 }
              })
            }   
        },
        created(){
            // debugger
            this.getNew()
            console.log('re33333')
        }
}

</script>
<style lang="less" scoped>
    .sub_Info{
        padding: 15px;
    }
   h1{
       color: #f00;
       font-size: 16px;
       text-align: center;
   }
   .sub_title{
       font-size: 12px;
       color: #6392ba;
       display: flex;
       justify-content: space-between;
       padding: 10px 60px 15px;
   }
   .sub_container{
       padding: 12px 0 0 0;
       font-size: 12px;
       text-indent: 24px;
   }
</style>


