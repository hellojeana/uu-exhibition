
export default{
  components:{
    ChooseSex,
    FormLi,
    FooterNavbar
  },
  data(){
    return{
      aui_title:'个人信息设置',
      user_name:'27小王老师',
      id_card:'460102934957203948',
      address:'秀英区滨海大道',
      sex:0,
      avatar:null,
      remark_img:null,
      remark_text:'哈哈',
      editorContent:null
    }
  },
  methods: {
    getContent: function () {
      alert(this.editorContent)
    }
  },
  mounted() {
    var editor = new E('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.customConfig.menus = [
      'head',
      'bold',
      'italic',
      'underline',
      'link',
    ];
    editor.create()
  }
}
