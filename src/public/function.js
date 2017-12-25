// 公共方法
import http from '@/utils/http'
import api from '@/utils/api'
function route_switch(app_url) {
    var url, app_url_str, router, app_site;
    app_url_str = app_url.replace(/\//g, '$'); // 路径识别符替换
    app_site = 'http://web.yedan8.com'; // app域名
    router = {
        "$app$index": "/#/app/index",
        "$appraisal$indexx": "/#/user/home",
        "$sick_leave_log$table_statistics": "/#/menus/sick_leave_log/table_statistics"
    }; // 映射组

    if (typeof eval('router.' + app_url_str) == "undefined") {
        url = app_site + app_url;
    } else {
        url = eval('router.' + app_url_str);
    }
    return url;
}

async function school_title() {
    let params = {}
    const res = await http.get(api.data_school, params)
    
    if (res.data.status == 1) {
        document.title = res.data.data.name;
        localStorage.schoolName= res.data.data.name;//学校名称
        localStorage.schoolBeginDate= res.data.data.begin_date;//学校开学日期
    } else {
        console.log(res.data.status);
    }
}
// 引入到vue的方法


export {
    route_switch,
    school_title
}