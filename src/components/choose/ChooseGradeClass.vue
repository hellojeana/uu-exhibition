<template>
    <div>
        <div class="aui-bar aui-bar-btn aui-bar-btn-sm aui-bar-btn-full aui-bg-blue" v-show="isShowGrade">
            <div v-for="(item,index) in gradeData" class="aui-bar-btn-item group_item_btn"
                 @click="changeGradeTabs(item.id)"
                 :class="{aui_active:item.id==gradeId}">{{item.name}}</div>
        </div>
  		<div class="aui-bar aui-bar-btn aui-bar-btn-sm aui-bar-btn-full aui-bg-blue" v-show="isShowClass">
            <div v-for="(item,index) in classData" class="aui-bar-btn-item group_item_btn"
                 @click="changeClassTabs(item.id)"
                 :class="{aui_active:item.id==classId}">{{item.name}}</div>
        </div>
    </div>
</template>
<script>
    import http from '@/utils/http'
    import api from '@/utils/api'

    export default {
        data () {
            return {
                data: [],
                gradeData:[],//年级数组
                classData:[],//班级数组
                gradeId:0,//年级id
                classId:0,//班级id
                defaultNum:0,
            }
        },
        props: {
        	  //items: {  // 必须提供字段
        	  //  required: true
        	  //},
        	  checkAtuh: {   //checkAtuh:是否需要检测权限  1需要 0不需要
        	    default: 0
        	  },
        	  isShowGrade: { // isShowGrade:是否显示年级选项卡 默认显示
	      	    default: true
	      	  },
	      	  isShowClass: { // isShowClass是否需要显示班级选项卡 默认显示
	      	    default: true
	      	  },
	      	  defaultGradeId: { // gradeId当前年级id
	      	    default: 0
	      	  },
        	  defaultClassId: { // classId当前班级id
	      	    default: 0
	      	  },
        },
        mounted:  function () {
        	 this.gradeId=this.defaultGradeId;
        	 this.classId=this.defaultClassId;
        	 this.getClassData()
        },
        methods: {
        	//切换年级   重新获取班级接口
        	changeGradeTabs:function(index){
                this.gradeId=index;
                this.getClassData()
            },
            //切换班级
            changeClassTabs:function(index){
                this.classId=index;
                this.$emit("callback",{'gradeId':this.gradeId,'classId':this.classId});//执行使用当前组件的当前页面的回调方法
            },
            //获取班级接口
        	getClassData:async function(){
        		let params = {}
        		params.grade_id=this.gradeId;//年级id
        		//if(this.defaultGradeId>0){
        		//	params.grade_id=this.defaultGradeId;//默认选中年级
        		//}
        		if(this.defaultClassId>0&&this.defaultNum==0){
        			params.class_id=this.defaultClassId;//默认选中班级
        		}
        		if(this.checkAtuh==1){
        			params.check_atuh=this.checkAtuh;//是否需要检测权限 1需要 0不需要  检测权限后没有权限的将该老师全部任教班级列处理
        		}
        	    const res = await http.get(api.data_class, params)
                if (res.status == 200) {
                	if(res.data.data.grade_data.length==0){//如果年级数组为空隐藏年级选项卡
                		this.isShowGrade=false;
                	}
                    this.gradeData=res.data.data.grade_data
                    this.classData=res.data.data.class_data
                    this.gradeId=res.data.data.grade_id
                    this.classId=res.data.data.class_id
                    this.defaultNum=1;
                    this.$emit("callback",{'gradeId':this.gradeId,'classId':this.classId});//执行使用当前组件的当前页面的回调方法
                }
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