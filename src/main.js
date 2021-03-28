import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import App from './App.vue'
// import env from './env'

import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const mock = false
if (mock) {
  require('./mock/api')
}

// 根据前端的跨域方式做调整，配置请求的根路径
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = env.baseURL

// 超时时间
axios.defaults.timeout = 8000

// 接口错误拦截
axios.interceptors.response.use((response) => {
  let res = response.data
  let path = location.hash
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    return Promise.reject(res)
  }
})

Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg',
})
Vue.use(VueCookie)
Vue.use(Message)

// 把axios绑定到Vue原型上 axios不能像其他组件一样通过Vue.use()直接被引用
Vue.prototype.$http = axios
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
