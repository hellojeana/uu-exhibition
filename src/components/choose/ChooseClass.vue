<template>
    <div class="aui-bar aui-bar-btn aui-bar-btn-sm aui-bar-btn-full aui-bg-blue">
        <div v-for="(item,index) in tabsParam" class="aui-bar-btn-item user_group_item_btn"
             @click="toggleTabs(index)"
             :class="{aui_active:index==nowIndex}">{{item}}
        </div>
    </div>
</template>
<script>
    import http from '../../utils/http'
    import api from '../../utils/api'
//    配合ChooseGrade使用效果更佳！！！！！！！！
    export default {
        data () {
            return {
                data: [],
                tabsParam: ['全部','1班', '2班', '3班', '4班', '5班', '6班', '7班', '8班'],
                nowIndex: 0,//默认激活1班
            }
        },
        methods: {
            toggleTabs: function (index) {
                this.nowIndex = index;
            }
        }
    }
</script>
<style scoped>
    .aui_active {
        background-color: #03a9f4;
        color: #ffffff;
    }
</style>