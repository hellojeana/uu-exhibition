<template>
<section class="aui-grid aui-bg-blue" id="id">
	<div class="aui-row aui-text-info">
         <div id="prev_week" class="aui-col-xs-2 aui-padded-t-10 aui-padded-b-10 "  @click="changeDate(-1,showType,1)" v-show="isShowWeek">
               <i class="aui-iconfont "  style="letter-spacing:-5px; "  v-show="isShowWeekLeft">&lt;&lt;</i>
         </div>
         <div id="prev_day" class="aui-col-xs-1 aui-padded-t-10 aui-padded-b-10 " @click="changeDate(-1)" v-show="isShowDay">
               <i class="aui-iconfont "   v-show="isShowDayLeft">&lt;</i>
         </div>
                <div id="show_view" class="aui-col-xs-6  aui-padded-t-5 aui-padded-b-5" >
                     <div class="aui-grid-label"  >
                          <div  id="show_day" >{{show_day}}</div>
                          <div class=" aui-text-center">
	                          <span id="week_num"  v-show="defaultIsShowWeekNum">{{week_num}}</span>
	                          <span  v-show="defaultIsShowWeekStr">{{show_week}}</span>
                     	  </div>
                      </div>
                </div>
         <div id="next_day" class="aui-col-xs-1 aui-padded-t-10 aui-padded-b-10 " @click="changeDate(1)"  v-show="isShowDay">
               <i class="aui-iconfont  "  v-show="isShowDayRight">&gt;</i>
         </div>
         <div id="next_week" class="aui-col-xs-2 aui-padded-t-10 aui-padded-b-10 "  @click="changeDate(1,showType,1)"  v-show="isShowWeek">
               <i class="aui-iconfont " style="letter-spacing:-5px;   "  v-show="isShowWeekRight">&gt;&gt;</i>
         </div>
	</div>
</section>
</template>
<script>
    import http from '@/utils/http'
    import api from '@/utils/api'

    export default {
        data () {
            return {
            	today: new Date(new Date().getFullYear(),new Date().getMonth()),
                defaultBeginDay:'',
                initialDay:0,
                dateId:0,
                week_num:'',
                show_day:'',
                isShowWeekLeft:true,
                isShowWeekRight:true,
                isShowDayLeft:true,
                isShowDayRight:true,
                isShowWeek:true,
                isShowDay:true,
            	monday_day:'',
            	sunday_day:'',
            	beginWeek:'',
            	endWeek:'',
            	show_week:'星期一',
            	begin_Monday:'',
            	defaultIsShowWeekNum:true,
            	defaultIsShowWeekStr:true,
            }
        },
        props: {
        	  chooseDay: { //要切换的天
	      	    default:  ''
	      	  },
		      chooseWeek: { //要切换的周
	      	    default:  ''
	      	  },
	      	  beginDay: { //开始计算的日期
	      	    default:  localStorage.schoolBeginDate
	      	  },
		      endDay: { //结束计算的日期
	      	    default:  localStorage.schoolEndDate
	      	  },
		      showType: { //显示方式 0天 1周  2多个周  3月 
	      	    default:  '1'
	      	  },
	      	  weekStep: { //最小跨越的周数
	      	    default:  '1'
	      	  },
	      	  isShowWeekNum: {//是否需要显示周数
	      	    default:  true
	      	  },
	      	  isShowWeekStr: {//是否需要显示星期
	      	    default:  true
	      	  }
        },
        mounted:  function () {
        	if(this.beginDay==''||this.beginDay==undefined){
        		this.beginDay='2017-08-28';//初始化应该登录时处理
        	}
        	this.defaultIsShowWeekNum=this.isShowWeekNum;
        	this.defaultIsShowWeekStr=this.isShowWeekStr;
        	this.defaultBeginDay=this.beginDay;
        	this.newDateId='';
    		var nowDay = this.changeShowDay(this.today).replace(/-/g,"/");
    		 
   		    //var begin_time = new Date(this.beginDay);
   		    var begin_week = new Date(this.beginDay).getDay();          //开学当天星期
   		    this.begin_Monday =new Date(new Date(this.beginDay).getTime() - 24*60*60*1000*(begin_week-1));   //开学当周星期一

   		    if(this.chooseDay!=''){
				 var choose=new Date(this.chooseDay.replace(/-/g,"/"));
    			 this.changeDate(( (choose.getTime()-new Date(nowDay).getTime() ) /(24*60*60*1000) ));
    		 }else if(this.chooseWeek!=''){
    			 this.changeDate( (this.begin_Monday.getTime()+((this.chooseWeek-1)*7*24*60*60*1000 ) -new Date(nowDay).getTime()) /(24*60*60*1000)    );
    		 }else{
    			 var choose=new Date();
				 this.changeDate(( (choose.getTime()-new Date(nowDay).getTime() ) /(24*60*60*1000) ));
    		 }
    		
        },
        methods: {
       	  changeDate:function (day,type=-1,is_week_btn=0){//type 0切换天  1切换周 2 切换多个周  3切换月   和showType对应
       		   if(type==2 || type==1||(type==0&&is_week_btn==1)){
       			   day=(day*this.weekStep*7);
       			   this.today=new Date(this.today.getTime() + 24*60*60*1000*day);
       			   var thisMonth=this.getMonth(this.changeShowDay(this.today))
       		   }else if(type==3){
       			//console.log(this.getPreMonth(this.changeShowDay(this.today)));
       			//console.log(this.getNextMonth(this.changeShowDay(this.today)));
       			   if(day>0){
       				  var thisMonth=this.getNextMonth(this.changeShowDay(this.today))
       				  this.today=thisMonth.date;
       			   }else{
       				  var thisMonth=this.getPreMonth(this.changeShowDay(this.today))
       				  this.today=thisMonth.date;
       			   }
       		   }else{
       			  this.today=new Date(this.today.getTime() + 24*60*60*1000*day);
       			  var thisMonth=this.getMonth(this.changeShowDay(this.today))
       		   }
       		  
       		  
       		    //this.today=new Date(this.today.getTime() + 24*60*60*1000*day);
       		    var weekNames = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
       		    this.defaultBeginDay= this.defaultBeginDay.replace(/-/g,"/");       //开学日期
     
       		    var week_day=this.today.getDay();
       		    var tody_date=this.changeShowDay(this.today);
       		    var now=new Date(tody_date.replace(/-/g,"/"));
       		    var week=1;                                 //开学周次
       		    var week_sub;                              //周次差值
       		    var this_Monday;
       		    var this_sunday;
       		    
       		    var begin_week = new Date(this.beginDay).getDay();          //开学当天星期
    		    this.begin_Monday =new Date(new Date(this.beginDay).getTime() - 24*60*60*1000*(begin_week-1));   //开学当周星期一
    		    
       		    var week_reduce = ( (now.getTime()-this.begin_Monday.getTime()+24*60*60*1000 ) /(24*60*60*1000) );
       		 //console.log( (now.getTime()-this.begin_Monday.getTime()));
       		 
       		    if(week_reduce>=0){week_sub= parseInt( week_reduce/7)}else{week_sub= parseInt( (week_reduce+1)/7)-1}         //当周和开学起第一周的差
       		    week=week+week_sub;

       		    if(week<0){
       		    	this.week_num="未开学"
       		    }else{
       		    	this.week_num= "第"+week+"周";
       		    }
				if(week-this.weekStep-1<0){
					this.isShowWeekLeft=false;
				}else{
					this.isShowWeekLeft=true;
				}
				if((now.getTime()-this.begin_Monday.getTime())<=0){
					this.isShowDayLeft=false;
				}else{
					this.isShowDayLeft=true;
				}
				
       		    this.show_day=tody_date;    //显示月日
       		    this.show_week=" "+weekNames[week_day];      //显示星期
       		 	this.beginWeek=week;
				this.endWeek=week+(this.weekStep-1);
				
      		    var this_time = new Date(this.today)
      		    var this_week = this_time.getDay()
      		    if(this_week==0){
      		    	this_week=7
      		    }
      		    this_Monday =new Date(this_time.getTime() - 24*60*60*1000*(this_week-1));   //当周星期一
      		    this_sunday =new Date(this_time.getTime() + 24*60*60*1000*(7-this_week+(this.weekStep-1)*7));   //当周星期天
      
 		        this.monday_day=this.changeShowDay(this_Monday);                      //当周星期一的标准时间格式
 		        this.sunday_day=this.changeShowDay(this_sunday);                      //当周星期天的标准时间格式
 		      	var beginDay=this.monday_day;
 		      	var endDay=this.sunday_day;
 		        
     		    if(this.showType==1){     //显示周模式
     	  		    this.isShowDayLeft=false;
     	  		 	this.isShowDayRight=false;
     	  		    this.show_day= this.show_data(this_Monday)+"—"+this.show_data(this_sunday);  //输出周显示模式
     		    }else if(this.showType==2){//多个周
     		        this.isShowDayLeft=false;
    	  		 	this.isShowDayRight=false;
       	  		    this.show_day= '第'+this.beginWeek+"周—"+'第'+this.endWeek+"周";  //输出周显示模式
       	  		    this.defaultIsShowWeekStr=false;
       	  			this.defaultIsShowWeekNum=false;
     		    }else if(this.showType==3){//月模式
     		    	this.isShowDayLeft=false;
       	  		 	this.isShowDayRight=false;
       	  		    this.show_day= this.show_data(thisMonth.beginDay)+"—"+this.show_data(thisMonth.endDay);
       	  			this.week_num= thisMonth.year+'年'+thisMonth.month+'月';
       	  			this.defaultIsShowWeekStr=false;
	       	  		beginDay=this.changeShowDay(thisMonth.beginDay);
	 		    	endDay=this.changeShowDay(thisMonth.endDay);
     		    }else{//天模式
     		    	beginDay=tody_date;
     		    	endDay=tody_date;
     		    }
 		        
       			//参数属性依次是转换后的：当前时间，当前周数，当前星期，开始时间，结束时间, 开始周的星期一，结束周的星期天。
       		   this.$emit("callback",{'todyDate':tody_date,'week':week,'weekDay':week_day,'beginDay':beginDay,'endDay':endDay,'mondayDay':this.monday_day,'sundayDay':this.sunday_day,'beginWeek':this.beginWeek,'endWeek':this.endWeek});//执行使用当前组件的当前页面的回调方法

       	   },
       	   show_data: function (data){                                  //转换成标准日期格式函数，2017-09-08
       	    	var show_month=data.getMonth();
		        var show_day=data.getDate();
		        var show=(show_month+1)+"月"+show_day+"号";
		        return show
           },
	       changeShowDay: function (changeDate){                                  //转换成标准日期格式函数，2017-09-08
	    	    var mon = changeDate.getMonth() + 1;
	    	    var day = changeDate.getDate();
	    	    var rightDay = changeDate.getFullYear() + "-" + (mon<10?"0"+mon:mon) + "-" +(day<10?"0"+day:day);
	    	    return rightDay;
	       },
           /**
            * 获取上一个月
            *
            * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
            */
            getPreMonth:function(date) {
               var arr = date.split('-');
               var new_arr=[];
               var year = arr[0]; //获取当前日期的年份
               var month = arr[1]; //获取当前日期的月份
               var day = arr[2]; //获取当前日期的日
               var days = new Date(year, month, 0);
               days = days.getDate(); //获取当前日期中月的天数
               var year2 = year;
               var month2 = parseInt(month) - 1;
               if (month2 == 0) {
                   year2 = parseInt(year2) - 1;
                   month2 = 12;
               }
               var day2 = day;
               var days2 = new Date(year2, month2, 0);
               days2 = days2.getDate();
               if (day2 > days2) {
                   day2 = days2;
               }
               if (month2 < 10) {
                   month2 = '0' + month2;
               }
               //var t2 = year2 + '-' + month2 + '-' + day2;
               new_arr['date'] = new Date(year2,month2-1,day2);
               new_arr['year'] =  new_arr['date'].getFullYear();
               new_arr['month'] =  new_arr['date'].getMonth()+1;
               new_arr['week'] =  new_arr['date'].getDay();
               new_arr['beginDay'] = new Date(year2,month2-1,1);
               new_arr['endDay'] = new Date(this.getNextMonth(this.changeShowDay(new_arr['beginDay'])).date.getTime()-1000*60*60*24);
               return new_arr;
           },
           
           /**
            * 获取下一个月
            *
            * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
            */        
            getNextMonth:function(date,type=0) {
               var arr = date.split('-');
               var new_arr=[];
               var year = arr[0]; //获取当前日期的年份
               var month = arr[1]; //获取当前日期的月份
               var day = arr[2]; //获取当前日期的日
               var days = new Date(year, month, 0);
               days = days.getDate(); //获取当前日期中的月的天数
               var year2 = year;
               var month2 = parseInt(month) + 1;
               if (month2 == 13) {
                   year2 = parseInt(year2) + 1;
                   month2 = 1;
               }
               var day2 = day;
               var days2 = new Date(year2, month2, 0);
               days2 = days2.getDate();
               if (day2 > days2) {
                   day2 = days2;
               }
               if (month2 < 10) {
                   month2 = '0' + month2;
               }
           
               //var t2 = year2 + '-' + month2 + '-' + day2;
               new_arr['date'] = new Date(year2,month2-1,day2);
               new_arr['year'] =  new_arr['date'].getFullYear();
               new_arr['month'] =  new_arr['date'].getMonth()+1;
               new_arr['week'] =  new_arr['date'].getDay();
               new_arr['beginDay'] = new Date(year2,month2-1,1);
               if(type==0){//避免死循环
            	   new_arr['endDay'] = new Date(this.getNextMonth(this.changeShowDay(new_arr['beginDay']),1).date.getTime()-1000*60*60*24);
               }
               return new_arr;
           },
           getMonth:function(date) {
               var arr = date.split('-');
               var new_arr=[];
               var year = arr[0]; //获取当前日期的年份
               var month = arr[1]; //获取当前日期的月份
               var day = arr[2]; //获取当前日期的日
               new_arr['date'] = new Date(year,month-1,day);
               new_arr['year'] =  new_arr['date'].getFullYear();
               new_arr['month'] =  new_arr['date'].getMonth()+1;
               new_arr['week'] =  new_arr['date'].getDay();
               new_arr['beginDay'] = new Date(year,month-1,1);
               new_arr['endDay'] = new Date(this.getNextMonth(this.changeShowDay(new_arr['beginDay'])).date.getTime()-1000*60*60*24);
               return new_arr;
           }
        }
    }
</script>
<style scoped>
    .aui_active{
        background-color: #03a9f4;
        color: #ffffff;
    }
</style>