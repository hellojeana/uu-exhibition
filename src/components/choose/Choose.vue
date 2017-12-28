<template>
    <div class="aui-row aui-row-padded">
        <div class="aui-btn aui-btn-outlined aui-margin-r-5 choose-user-btn" data-value="230" choose_type='3'
             grade_id='11' is_radio='0' choose_type_hide="1" v-on:click="open">
            <i class="aui-iconfont aui-icon-plus aui-font-size-21 "></i>{{data_value}}
        </div>
    </div>
</template>
<script>

    import http from '../../utils/http'
    import api from '../../utils/api'
    import chooseIframe from '@/components/choose/chooseIframe.vue';
    export default {
        props: ["data_value"],
        data () {
            return {}
        },
        mounted: async function () {
            //获取已经选择的用户或其他关系选项
            // this.open();
        },

        methods: {
            //打开选择窗口
            open() {
                this.$layer.iframe({
                    type: 2,
                    content: {
                        content: chooseIframe, //传递的组件对象
                        parent: this,//当前的vue对象
                        data: []//props
                    },
                    title: '',
                    area: ['100%', '80%'],
                    shade: 0.3,
                    closeBtn: 1,
                    shadeClose: true
                });
                //   		 this.$layer.alert("找不到对象！");

            },
        }
    }
</script>
