<template>
    <div class="aui-bar aui-bar-btn aui-bar-btn-sm aui-bar-btn-full aui-bg-blue">
        <div v-for="(item,index) in groupData" class="aui-bar-btn-item user_group_item_btn"
             @click="changeGroupTabs(item.id)"
             :class="{aui_active:item.id==groupId}">{{item.name}}
        </div>
    </div>
</template>
<script>
    import http from '../../utils/http'
    import api from '../../utils/api'
    export default {
        data () {
            return {
                data: [],
                groupData:[],
                groupId: 0,//默认激活中层干部
            }
        },
        props: {
            //items: {  // 必须提供字段
            //  required: true
            //},
            checkAtuh: {   //checkAtuh:是否需要检测权限  1需要 0不需要
                default: 0
            },
            defaultGroupId: {
                default: 0
            }
        },
        mounted: async function () {
            this.groupId=this.defaultGroupId;
            this.getGroupData()
        },
        methods: {
            changeGroupTabs:function(index){
                this.groupId=index;
                this.getGroupData()
            },
            getGroupData:async function(){
                let params = {}
                params.group_id=this.GroupId;
                if(this.checkAtuh==1){
                    params.check_atuh=this.checkAtuh;//是否需要检测权限 1需要 0不需要  检测权限后没有权限的将该老师全部任教班级列处理
                }
                const res = await http.get(api.data_group, params)
                if (res.status == 200) {
                    this.groupData=res.data.data
//                    this.groupId=res.data.data.group_id
                    this.$emit("callback",{'groupId':this.groupId});
                }
            }
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