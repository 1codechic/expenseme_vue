import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import { securedAxiosInstance, plainAxiosInstance } from './backend/axios'
import './main.css'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'



axios.defaults.baseURL = process.env.NODE_ENV == "development" ? "http://localhost:3000" : "/"


Vue.config.productionTip = false

Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

new Vue({
  router,
  securedAxiosInstance,
  plainAxiosInstance,
  render: h => h(App)
}).$mount('#app')
