'use strict'

import axios from 'axios'
import qs from 'qs'
import config from '../config'
axios.defaults.withCredentials = false
axios.interceptors.request.use(config => {
    // loading
    if (localStorage.TOKEN) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `Bearer ${localStorage.TOKEN}`;
    }
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

function checkStatus(response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 201 || response.status === 304 || response.status === 400)) {
        return response
        // 如果不需要除了data之外的数据，可以直接 return response.data
    }
    // 异常状态下，把错误信息返回去
    return {'data': {status: -404, msg: '网络异常'}}
}

function checkCode(res) {

    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        alert(res.msg)
    }
    //未登录状态
    if (res.data.code === -101) {
        alert(res.data.msg);
        window.location.href = res.data.url;
        return false;
    }
    //无权限
    if (res.data.code === -102) {
        alert(res.data.msg);
        return false;
    }
//    console.log(res);
    if (res.data && (res.data.status <= 0)) {
        alert(res.data.msg)
    }
    return res
}

export default {
    post(url, data) {
        if (localStorage.TOKEN) {
            data.token = localStorage.TOKEN
        }
        return axios({
            method: 'post',
            baseURL: config.base_url,
            url,
            data: qs.stringify(data),
            timeout: 10000,
            headers: {
                // 'X-Requested-With': 'XMLHttpRequest',
                'X-Entity-Token': 'EM7-U_F5LJitvvxazs3D'
                // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    },
    get(url, params) {
        if (localStorage.TOKEN) {
            params.token = localStorage.TOKEN
        }
        return axios({
            method: 'get',
            baseURL: config.base_url,
            url,
            params, // get 请求时带的参数
            timeout: 10000,
            /*
             headers: {
             'X-Requested-With': 'XMLHttpRequest'
             }
             */
        }).then(
            (response) => {
                if (url == '/auth/login') {
                    console.log(response.data.data)
                    localStorage.JWT_TOKEN = response.data.data.token
                }
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    },
    getUrlKey: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
    },
    //获取cookie、
    getCookie: function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },
    //设置cookie,增加到vue实例方便全局调用
    setCookie: function (c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    },
    //删除cookie
    delCookie: function delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}