<template>
    <div class="tab-demo">
        <!--该demo不可直接import使用！！！按需复制到对应位置！！！-->
        <!--tab头部-->
        <!--渲染出tab选项，内容写在data里-->
        <div class="aui-tab aui-bar-btn-full">
            <div class="aui-tab-item" v-for="(item,index) in tabsParam" @click="toggleTabs(index)"
                 :class="{aui_active:index==nowIndex}">{{item}}
            </div>
        </div>
        <!--tab头部end-->

        <!--body-->
        <div v-if="nowIndex===0">
            tab1内容
        </div>
        <div v-if="nowIndex===1">
            tab2内容
        </div>
        <!--body end-->
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tabsParam: ['tab1', 'tab2'],
                nowIndex: 0,//默认激活第一个
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
    /*激活样式*/
    .aui_active {
        background-color: #03a9f4;
        color: #ffffff;
    }
</style>