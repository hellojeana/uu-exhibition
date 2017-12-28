<template>
    <div class="aui-bar aui-bar-btn aui-bar-btn-sm aui-bar-btn-full aui-bg-blue">
        <div v-for="(item,index) in subjectData" class="aui-bar-btn-item user_subject_item_btn"
             @click="changeSubjectTabs(item.id)"
             :class="{aui_active:item.id==subjectId}">{{item.name}}
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
                subjectData:[],
                subjectId: 0,//默认激活中层干部
            }
        },
        props: {
            //items: {  // 必须提供字段
            //  required: true
            //},
            checkAtuh: {   //checkAtuh:是否需要检测权限  1需要 0不需要
                default: 0
            },
            defaultSubjectId: {
                default: 0
            }
        },
        mounted: async function () {
            this.subjectId=this.defaultSubjectId;
            this.getSubjectData()
        },
        methods: {
            changeSubjectTabs:function(index){
                this.subjectId=index;
                this.getSubjectData()
            },
            getSubjectData:async function(){
                let params = {}
                params.subject_id=this.SubjectId;
                if(this.checkAtuh==1){
                    params.check_atuh=this.checkAtuh;//是否需要检测权限 1需要 0不需要  检测权限后没有权限的将该老师全部任教班级列处理
                }
                const res = await http.get(api.data_subject, params)
                if (res.status == 200) {
                    this.subjectData=res.data.data
//                    this.subjectId=res.data.data.subject_id
                    this.$emit("callback",{'subjectId':this.subjectId});
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
    .user_subject_item_btn{
        float: left;
        width: auto;
        margin: 5px 0px 0px 5px;
        padding: 0px 5px;
        border: none;
    }
</style>