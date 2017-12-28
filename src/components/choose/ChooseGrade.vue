<template>
    <div>

        <div class="aui-bar aui-bar-btn aui-bar-btn-sm aui-bar-btn-full aui-bg-blue" id="part">
            <div v-for="(item,index) in tabsParam" class="aui-bar-btn-item group_item_btn"
                 @click="toggleTabs(index)"
                 :class="{aui_active:index==nowIndex}">{{item}}</div>
        </div>

        <div v-if="nowIndex===0"><choose-class></choose-class></div>
        <div v-if="nowIndex===1"><choose-class></choose-class></div>
        <div v-if="nowIndex===2"><choose-class></choose-class></div>
        <div v-if="nowIndex===3"><choose-class></choose-class></div>
        <div v-if="nowIndex===4"><choose-class></choose-class></div>
        <div v-if="nowIndex===5"><choose-class></choose-class></div>

    </div>
</template>
<script>
    import http from '../../utils/http'
    import api from '../../utils/api'
    //    配合ChooseClass使用效果更佳！！！！！！！！
    import ChooseClass from './ChooseClass.vue'

    export default {
        components: {
            ChooseClass
        },
        data () {
            return {
                data: [],
                tabsParam:['全部','一年级','二年级','三年级','四年级','五年级','六年级'],
                nowIndex:0,//默认激活一年级
            }
        },
        mounted: async function () {
            let params = {}
            const res = await http.get(api.base_teachers_list, params)
            if (res.status == 200) {
                this.isshow = true;
                this.data = res.data.data;
            }
        },
        methods: {
            toggleTabs:function(index){
                this.nowIndex=index;
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