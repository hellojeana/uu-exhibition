import ChooseSex from '@/components/choose/ChooseSex.vue'
import FormLi from '@/components/input/FormLi.vue'
export default{
  components:{
    ChooseSex,
    FormLi
  },
  data(){
    return{
      birthday:'1997-01-29',
      sex:0,
      city:'',
      phone:''
    }
  },
  methods: {
    getContent: function () {
      alert(this.editorContent)
    }
  }
}
