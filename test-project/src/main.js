import Vue from 'vue'
import './plugins/axios'
import 'lodash'
import App from './App.vue'
import axios from 'axios'
import router from './router'





new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

