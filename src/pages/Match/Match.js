export default{
    components: {},
    data () {
        return {}
    },
    mounted: function () {
        this.prizeContainer()
    }
    ,
    methods: {
        prizeContainer: function () {
            $('.prize-container').toggle(200)
            this.matchTip()
        }
        ,
        matchTip:function () {
            $('.match-tip').toggle(1000)
            this.yellowBtn()
        },
        yellowBtn:function () {
            $('.yellow-btn').toggle(1500)
            this.redBtn()
        },
        redBtn:function () {
            $('.red-btn').toggle(2000)
        }
    }
}