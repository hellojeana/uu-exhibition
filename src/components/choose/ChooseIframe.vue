<template>
   <!-- <iframe  id="show-iframe"  frameborder=0 name="showHere" scrolling=auto src="http://demo.school.com/common/choose?user_id=''&id_type=1"></iframe> --> 
    <div class="select-bg" id = "selectDiv" style="overflow-y:scroll; overflow-x:scroll; width: 100%; height: 100%; ">
        <!-- <div class="aui-btn aui-btn-info" onclick= "clearData()" tapmode  >清空</div> -->
        <div style=" width:100%;top: 0px;position: fixed;  z-index:999; background: #fff;" id="select-user">
        <div class="aui-searchbar" id="search">
            <div class="aui-btn aui-btn-info" tapmode id = "nums" onclick="choose_view(this)" select_type='1' >查看已选</div>
                <div class="aui-searchbar-input aui-border-radius" tapmode onkeyup="doSearch();">
                        <input type="search" placeholder="请输入搜索内容" id="search-keyword" value="" >
                </div>
           		<div class="aui-btn aui-btn-info" >确定</div>
            </div>
             <!-- begin 选择类型-->
            <div class="aui-bar aui-bar-btn aui-bar-btn-sm aui-bar-btn-full" id="group_item" >
                <div class="aui-bar-btn-item group_item_btn group_item_btn_1 aui-active" onclick="showGroup(1,0)" >学生</div>
                <div class="aui-bar-btn-item group_item_btn group_item_btn_3" onclick="showGroup(3,0)" >老师</div>
                <div class="aui-bar-btn-item group_item_btn group_item_btn_2" onclick="showGroup(2,1)" >分组</div>
            </div>
              <!-- end 选择类型 -->
            <!-- begin 选择id类型 -->
            
             <div class="aui-bar aui-bar-btn aui-bar-btn-sm aui-bar-btn-full" id="id_type_item">
                <div class="aui-bar-btn-item id_type_item_btn id_type_item_btn_1 aui-active" onclick="choose_id_type(1)" >选人</div>
                <div class="aui-bar-btn-item id_type_item_btn id_type_item_btn_2" onclick="choose_id_type(2)"  >选年级</div>
                <div class="aui-bar-btn-item id_type_item_btn id_type_item_btn_3" onclick="choose_id_type(3)"  >选班级</div>
                <div class="aui-bar-btn-item id_type_item_btn id_type_item_btn_4" onclick="choose_id_type(4)"  >选学科</div>
                <div class="aui-bar-btn-item id_type_item_btn id_type_item_btn_5" onclick="choose_id_type(5)"  >选分组</div>
                <div class="aui-bar-btn-item id_type_item_btn id_type_item_btn_0" onclick="choose_id_type(0)"  >全部学生</div>
            </div>
            <!-- end 选择id类型 -->
            <div id='item_view' ></div> <!-- 筛选视图-->
            <div id='item_view_sub' ></div> <!-- 筛选子视图-->
            <div id='choose_view' > </div> <!-- 已选视图-->
   		</div>
        <section id="user_view"  style= " position:relative;" class=" aui-margin-l-10"></section> <!-- 选择按钮视图-->
   </div>


</template>
<script>
    import http from '../../utils/http'
    import api from '../../utils/api'
    export default {
        data () {
            return {
            }
        },  
        mounted: async function () {
       	 //获取已经选择的用户或其他关系选项、、\
       	 //this.$layer.closeAll();
//       	 alert( this.$parent);
       	 
         // this.open();
        },
        methods: {
        }
    }
</script>
<style scoped>
    .aui_active {
        background-color: #03a9f4;
        color: #ffffff;
    }
    .user_group_item_btn{
        float: left;
        width: auto;
        margin: 5px 0px 0px 5px;
        padding: 0px 5px;
        border: none;
    }
</style>