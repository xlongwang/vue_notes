<template>
     <div>
          <!-- <h1>homeContainer</h1> -->
          <div class="swiper_container">
               <mt-swipe :auto="0">
                    <!-- <mt-swipe-item v-for="item in lunbolist"><a href="#"></a></mt-swipe-item>
                    <mt-swipe-item>2</mt-swipe-item>
                    <mt-swipe-item>3</mt-swipe-item> -->
                     <mt-swipe-item v-for="(item, index) in lunbolist" :key="index">
                         <a class="swipe-item-link" :href="item.url"><img :src="item.img" /></a>
                    </mt-swipe-item>
               </mt-swipe>
          </div>
          <div class="homeNav_container">
               <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新间资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatboxes-filled"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-videocam"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul>
          </div>
     </div>
</template>
<script>
export default {
    data(){
         return{
             lunbolist:[]
         }
    },
    created(){
      this.getLunbotu()
    },
    methods:{
         getLunbotu: function (){
              this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
                   let data = result.body;
                   if(data.status == 0){
                        this.lunbolist = data.message;
                        console.log(this.lunbolist)
                   }else{
                        alert("轮播图接口返回失败")
                   }
              })
         }
    }
}
</script>

<style lang="scss" scoped>
    .swiper_container{
         height: 200px;
    }
    .swipe-item-link{
         display: block;
         height: 100%;
         overflow: hidden;
         img{
              height: 100%
         }
    }
    .homeNav_container{
          .mui-media-body{
               font-size: 13px;
          }
       .mui-icon{
            border-radius: 60px;
            line-height: 60px;
            width: 60px;
            margin: 0 auto;
            color: #fff;
            display: block;
            &.mui-icon-home{
                background-color: #11c09b;
            }
            &.mui-icon-image{
                 background-color: #ff504e;
            }
            &.mui-icon-extra-cart{
                 background-color: #3882ff;
            }
            &.mui-icon-chatboxes-filled{
                 background-color: #1eb6fd;
            }
            &.mui-icon-videocam{
                  background-color: #ff4e00;
            }
            &.mui-icon-phone{
                 background-color: #ff8026;
            }
       }

    }
</style>
