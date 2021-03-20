import Vue from 'vue'
import router from './router'
import axios from 'axios'

import App from './App.vue'
import env from './env'

Vue.config.productionTip = false

// 根据前端的跨域方式做调整，配置请求的根路径
axios.defaults.baseURL = '/api'
axios.defaults.baseURL = env.baseURL

// 超时时间
axios.defaults.timeout = 8000

// 接口错误拦截
axios.interceptors.response.use(response => {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
