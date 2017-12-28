<template>
<section class="aui-grid aui-bg-blue" id="id">


	<div class="aui-row aui-text-info"  v-for="(item,index) in data"   v-show='index==nowIndex'>
         <div id="prev_day" class="aui-col-xs-2 aui-padded-t-10 aui-padded-b-10 " @click="toggleTabs(item.prev)"  >
               <i class="aui-iconfont "  v-show='item.prev>=0' >&lt;</i>
         </div>
                <div id="show_view" class="aui-col-xs-8  aui-padded-t-5 aui-padded-b-5" >
                     <div class="aui-grid-label"  >
                          <div  id="show_day" >{{item.school_year}}</div>
                           <span id="week_num">第{{item.semester}}学期</span>
                      </div>
                </div>
         <div id="next_day" class="aui-col-xs-2 aui-padded-t-10 aui-padded-b-10 " @click="toggleTabs(item.next)"  >
               <i class="aui-iconfont  " v-show='item.next>=0' >&gt;</i>
         </div>
	</div>
</section>
</template>
<script>
    import http from '@/utils/http'
    import api from '@/utils/api'

    export default {
        data () {
            return {
            	data: [],
            	nowIndex:0
            }
        },
        props: {
        	semester_id:0
        },
        mounted: async function () {
            let params = {}
            const res = await http.get(api.data_semester, params)
            if (res.status == 200) {
                this.isshow = true;
                console.log(res.data.data.semester);
                this.data=res.data.data.semester;
                for (var i = 0, len = res.data.data.semester.length; i < len; i++) {
                    if(i==0){
                    	this.data[i]['prev']=-1;
                    	this.data[i]['next']=1;
                    }else if(i==len-1){
                    	this.data[i]['prev']=i-1;
                    	this.data[i]['next']=-1;
                    }else{
                    	this.data[i]['prev']=i-1;
                    	this.data[i]['next']=i+1;
                    }
                    if(this.semester_id>0){
                    	if(this.semester_id==res.data.data.semester[i]['id']){//指定默认学期id
                        	this.toggleTabs(i);
                        }
                    }else{
                    	if(res.data.data.semester[i]['now_year']==1){//当前学期
                         	this.toggleTabs(i);
                        }
                    }
                }
                
            }
            console.log(this.data);
        },
        methods: {
            toggleTabs:function(index){
                this.nowIndex=index;
                this.$emit("callback",this.data[this.nowIndex]);//执行使用当前组件的当前页面的回调方法
            }
        }
    }
</script>
<style scoped>
    .aui_active{
        background-color: #03a9f4;
        color: #ffffff;
    }
</style>