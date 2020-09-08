import '@babel/polyfill'
import Vue from 'vue'
import Cookies from 'js-cookie'

import App from './App.vue'
import router from './router'
import store from './store/'
import Antd from 'ant-design-vue'
import './plugins/axios'
import millions from '../src/index'
import 'ant-design-vue/dist/antd.less'

Vue.use(millions);
Vue.use(Antd);
Vue.config.productionTip = false
Vue.prototype.$cookies = Cookies;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
