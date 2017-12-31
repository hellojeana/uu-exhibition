import ChooseSex from '@/components/choose/ChooseSex.vue'
import FormLi from '@/components/input/FormLi.vue'
import VDistpicker from 'v-distpicker'
import calendarInput from '@/assets/vendor/calendar-plugin/calendar-input.vue'
export default{
    components: {
        ChooseSex,
        FormLi,
        VDistpicker,
        calendarInput
    },
    props: {
        limit: {  //日期可选范围
            type: Object,
            default() {
                return {
                    minYear: 1900,
                    minMonth: 1,
                    minDay: 1,
                    maxYear: 2030,
                    maxMonth: 3,
                    maxDay: 20
                }
            }
        }
    },
    data(){
        return {
            birthday: '',
            sex: 0,
            phone: '',
            province: '',
            city: ''
        }
    },
    methods: {

        // 城市选择
        selectProvince(value) {
            this.province = value.value
            console.log(this.province);
        },
        selectCity(value) {
            this.city = value.value
            console.log(this.city);
        },
        // 时间选择
        getVal(){
            setTimeout(function () {
                var val = $('.calendar-input').val()
                console.log($('.calendar-input').val())
                this.birthday = val
            }, 1000)
        }
    }
}
