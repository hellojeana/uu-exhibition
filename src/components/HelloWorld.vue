<template>
    <div class="hello">
        <h1>快速导航</h1>
        <router-link to="/mode1">转盘页面</router-link>
        <router-link to="/match">匹配成功页面</router-link>
    </div>
</template>

<script>
    import http from '@/utils/http'
    import api from '@/utils/api'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                allUser: ''
            }
        },
        mounted: function () {
            this.getAllUser();
        },
        methods: {
            getAllUser: async function () {
                let params = {}
                const res = await http.post(api.data_user, params)
                if (res.status == 201) {
                    this.allUser = res.data;
                    console.log(res.data);
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
