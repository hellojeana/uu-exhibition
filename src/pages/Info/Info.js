import ChooseSex from '@/components/choose/ChooseSex.vue'
import FormLi from '@/components/input/FormLi.vue'
import VDistpicker from 'v-distpicker'
import calendarInput from '@/assets/vendor/calendar-plugin/calendar-input.vue'
export default{
  components:{
    ChooseSex,
    FormLi,
    VDistpicker,
    calendarInput
  },
  data(){
    return{
      birthday:'1997-01-29',
      sex:0,
      phone:'',
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

  }
}
