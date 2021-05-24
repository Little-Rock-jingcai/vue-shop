import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

//导入字体图标
import './assets/fonts/iconfont.css'

// 导入全局样式表
import './assets/css/global.css'

//导入vue-table-with-tree-grid用于树形列表插件
import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
//请求拦截
axios.interceptors.request.use(config => {
    //console.log(config)
    //为请求头对象，添加token验证的Authorization字段
    config.headers.Authorization = window.sessionStorage.getItem('token')
    //最后必须return config
    return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

//将vue-table-with-tree-grid注册为全局可用的组件
Vue.component('tree-table', TreeTable)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
