import http from '@/utils/http'
import api from '@/utils/api'
export default{
    components: {},
    data () {
        return {
            allData: '',
            matchAvatar: '',//中间匹配的头像
            clickNum: 1,//答的题数
            chooseId: '',//每次选择的答案
            allUsers: ''
        }
    },
    mounted: function () {
        this.getAllUser();
    },
    methods: {
        rotary: function () {
            $(function () {
                //中心点横坐标
                var dotLeft = ($(".rotary-container").width() - $(".dot").width()) / 2;
                //中心点纵坐标
                var dotTop = ($(".rotary-container").height() - $(".dot").height()) / 2;
                //起始角度
                var stard = 0;
                //半径
                var radius = 130;
                //每一个BOX对应的角度;
                var avd = 360 / $(".box").length + stard;
                console.log($(".box:eq(1)").offset().top);
                console.log($(".box:eq(1)").offset().left);
                //每一个BOX对应的弧度;
                var ahd = avd * Math.PI / 180;
                // console.log(Math.sin(ahd * 2));
                // console.log(Math.sin(ahd * 6));
                // console.log(Math.cos(ahd * 2));
                // console.log(Math.cos(ahd * 3));
                //设置圆的中心点的位置
                $(".dot").css({"left": dotLeft, "top": dotTop});
                $(".box").each(function (index) {
                    $(this).css({
                        "left": Math.sin((ahd * index)) * radius + dotLeft,
                        "top": Math.cos((ahd * index)) * radius + dotTop
                    });
                });
            })
        },
        getAllUser: async function () {
            let params = {}
            const res = await http.post(api.data_user, params)
            if (res.status == 201) {
                this.allData = res.data;
                this.allUsers = res.data.candidates;
                console.log(this.allScore);
                console.log(res.data);
                this.$nextTick(() => {
                    this.rotary();
                });
            }
            // 默认匹配的用户头像
            this.matchAvatar = this.allUsers[3].avatar;
        },
        getClick: function (id, weight) {
            // 获取已答题目+已跳过题目数
            var click = this.clickNum;
            click++;
            this.clickNum = click;
            console.log(this.clickNum);
            // 获取用户选择的答案id
            this.chooseId = id;
            console.log(this.chooseId);
            var allUsers = this.allUsers;
            for (var i = 0, len = allUsers.length; i < len; i++) {
                console.log(allUsers[i].option_ids);
                var result = $.inArray(id, allUsers[i].option_ids);
                // 找出其他用户是否有同样的选项
                if (result == -1) {
                    console.log('这里面没有一样的，不加分');
                }
                if (result !== -1) {
                    console.log('这里面有一样的，加分');
                    var matchUserIndex = allUsers.indexOf(allUsers[i], allUsers);
                    console.log(matchUserIndex);
                    allUsers[matchUserIndex].score = allUsers[matchUserIndex].score + weight;
                    console.log('用户序号' + matchUserIndex + '当前得分为:' + allUsers[matchUserIndex].score);
                    this.getAllUserScore();
                    // 当分数大于1时页面跳转
                    if (allUsers[matchUserIndex].score > 1) {
                        window.location.href = '/#/match';
                    }
                    if (this.clickNum == this.allData.questions.length) {
                        window.location.href = '/#/match';
                    }
                }
            }
        },
        getAllUserScore: function () {
            // 获取八个人的分数
            var allUsers = this.allUsers;
            var scoreArr = [];
            for (var i = 0, len = allUsers.length; i < len; i++) {
                scoreArr.push(allUsers[i].score);
            }
            console.log(scoreArr);
            // 求最高分
            var highestScore = Math.max.apply(null, scoreArr);
            // 获取最高分用户序号
            var highestScoreIndex = scoreArr.indexOf(highestScore, scoreArr);
            // 获取最高分用户头像
            this.matchAvatar = allUsers[highestScoreIndex].avatar;
        },
        rotate: function () {
            $(".rotary-box").rotate({
                duration: 6000,
                animateTo: 50
            })
        }
    }
}
