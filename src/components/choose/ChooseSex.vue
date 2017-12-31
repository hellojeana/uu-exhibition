<template>
    <div class="myradio aui-text-right aui-pull-right">
        <label class="open" :class="{hidden:sex == 1}">
            <input name="sex" type="radio" value="open"/>
        </label>
        <label class="close" :class="{hidden:sex == 0}">
            <input name="sex" type="radio" value="close"/>
        </label>
    </div>
</template>
<script>
    export default{
        data (){
            return {
                sex: 1
            }
        },
        mounted: function () {
            this.fetchData()
        },
        methods: {
            fetchData: async function () {
                $(".myradio input").click(function (e) {
                    var state = $(this).val();
                    var myradio = $(".myradio");
                    var iclose = $(this).parents(".myradio").find('.close');
                    // console.log(iclose);
                    var iopen = $(this).parents(".myradio").find('.open');
                    // console.log(state);
                    $(this).parents(".myradio").find(':radio').removeAttr('checked');
                    $(this).parent('label').addClass('disabled');
                    $(this).parent('label').siblings('label').find(':radio').attr('checked', true);
                    if (state == 'open') {
                        open();
                    } else {
                        close();
                    }

                    function open() {
                        iopen.animate({left: "50px"}, 100);
                        setTimeout(function () {
                            iopen.hide();
                            iclose.show();
                            iopen.css('left', 0);
                            $(".myradio label").removeClass('disabled');
                        }, 300);
                    }

                    function close() {
                        iclose.animate({left: "0px"}, 100);
                        setTimeout(function () {
                            iclose.hide();
                            iopen.show();
                            iclose.css('left', '30px');
                            $(".myradio label").removeClass('disabled');
                        }, 300);
                    }
                })
            }
        }
    }
</script>
<style scoped>
    /*开关按钮*/
    input[type="radio"] {
        opacity: 0;
    }

    .myradio {
        display: inline-block;
        vertical-align: middle;
        margin: 0;
        margin-right: 10px;
        padding: 0;
        width: 60px;
        height: 25px;
        border-radius: 7px;
        position: relative;
        overflow: hidden;
        background-color: #11aff1;
        border: 1px solid #ccc
    }

    .myradio .open, .myradio .close {
        width: 30px;
        height: 25px;
        font-size: 14px;
        border-radius: 0px;
        background: white;
        color: white;
        position: absolute;
        top: 0;
        left: 0;
    }

    /*yuchuang 2017.5.12*/
    .myradio .open {
    }

    .myradio .close {
        background: #fff
    }

    .hidden {
        display: none
    }

    .disabled {
        pointer-events: none;
        cursor: default;
    }

    .myradio .close {
        left: auto;
        right: 0;
        color: #fff;
    }

    .myradio .open:after {
        content: '男';
        position: absolute;
        top: 0;
        left: 30px;
        width: 30px;
        height: 25px;
        line-height: 25px;
        text-align: center;
    }

    .myradio .close:before {
        content: '女';
        position: absolute;
        top: 0;
        left: -30px;
        width: 30px;
        height: 25px;
        line-height: 25px;
        background: #f93617;
        text-align: center;
    }

</style>
