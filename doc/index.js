import '@babel/polyfill'
import Vue from 'vue'
import Cookies from 'js-cookie'

import App from './App.vue'
import router from './router'
import store from './store/'
import Antd from 'ant-design-vue'
import './plugins/axios'
import CodeView from "@/components/CodeView/CodeView.vue";
import millions from '../build/index.js'
import '../build/css/main.css'
import 'ant-design-vue/dist/antd.css';


Vue.component("CodeView",CodeView);
console.log(millions)
console.log(Antd)
Vue.use(millions);
Vue.use(Antd);
Vue.config.productionTip = false
Vue.prototype.$cookies = Cookies;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
