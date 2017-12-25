<template>
    <div class="hello">
        <h1></h1>
        <div v-for="value in allUser.questions">
            <span>{{value.content}}</span><br/>
            <span v-for="one in value.question_options" style="margin-left: 20px;">{{one.content}}{{one.percent}}</span>
        </div>
        <div v-for="value in allUser.candidates">
            <img :src="value.avatar"/>
            <span>{{value.display_name}} - {{value.city}}</span>
        </div>
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
