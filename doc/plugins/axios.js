"use strict";

import Vue from 'vue';
import axios from "axios";
import {message} from "ant-design-vue";
import ERRORS from "./errors";
import {getToken} from "../utils/tools"

let config = {
    baseURL: "/",
    timeout: 60 * 1000, // Timeout
};

const _axios = axios.create(config);


_axios.interceptors.request.use(
    config=>{
        config.paramSerializer = '$httpParamSerializerJQLike';
        //token要放在我们请求的header上面带回去给后端
        let TOKEN=getToken();
        if(TOKEN){
            config.headers.token=TOKEN
        }
        return config
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    (response)=>{
        if(response.status==200){
            if(response.data.code!=null && response.data.code!="0000"){
                message.error(response.data.status);
            }
            return response.config.responseType=="arraybuffer"?response:response.data;
        }
        return response.data
    },
    error => {

        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            let data=error.response.data;
            let status=error.response.status;
            if(status=="401" || status==450){
                setTimeout(function() {
                    window.parent?window.parent.location.replace("/"):window.location.replace("/");
                },1500)
            }
            //let  headers=error.response.headers;
            let Alert=ERRORS.find(item=>item.code==status);

            if(Alert!=null){
                message.error(Alert.msg);
            }else{
                message.error(status+":"+data);
            }
        } else {
            message.error(ERRORS[0].msg);
        }
        return error;
    }
);

Plugin.install = function(Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        $axios: {
            get() {
                return _axios;
            },
            post(){
                return _axios;
            }
        },
    });
};

Vue.use(Plugin)

export default Plugin;
