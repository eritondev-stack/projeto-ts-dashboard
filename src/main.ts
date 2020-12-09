/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/debounce'
import './assets/tailwind.css'
import './plugins/vuesax'
import './filters/filters'
import 'boxicons/css/boxicons.css'
import './plugins/vMask'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
