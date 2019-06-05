<template>
    <div>
          <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item, index) in newslist" :key="index">
					<router-link :to="'/home/newsInfo/'+ item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h2>{{ item.title }}</h2>
							<p class="mui-ellipsis">
                                 <span>发表时间:<template>{{item.time}}</template></span>
                                 <span>点击：<template>{{ item.click }}</template>次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>
<script>
import moment from 'moment'
import { Toast } from 'mint-ui'
   //  time: moment().format('YYYY-MM-DD HH:mm:ss')
export default {
    data(){
        return {
          newslist: {}
        }
    },
    methods: {
        newStr(id){
            return 'str_'+id
        },
        getNewsList() {
            this.$http.get('http://newsList.json').then(result => {
                debugger
                 if(result.body.status ===0 ){
                     let newsInfo = result.body.messages;
                    var newsTmp = {};
                    newsInfo.map(val => {
                        this.$set(newsTmp, this.newStr(val.id), {
                            id: val.id,
                            title: val.title,
                            add_time: val.add_time,
                            zhaiyao: val.zhaiyao,
                            click: val.click,
                            img_url: val.img_url,
                            time: val.date+' '+val.add_time
                        }) 
                    })
                    this.newslist = newsTmp
                 }else{
                     Toast('获取新闻列表失败！')
                 }
            })
        }
    },
    created(){
        this.getNewsList()
    }
}
</script>

<style lang="less" scoped>
   .mui-media-body{
       h2{
           font-size: 14px;
           white-space: nowrap;
           overflow: hidden;
           text-overflow: ellipsis;
       }
   }
   .mui-ellipsis{
       color: #2e6add;
       display: flex;
       justify-content: space-between;
   }
</style>

