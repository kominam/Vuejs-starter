import Vue from 'vue'
import navBar from '@components/navBar'
import Http from '@plugins/axios'
import router from './routes/index'
import store from './store/store'

require('../bootstrap/bootstrap')

Vue.component('navBar', navBar)
Vue.use(Http)

new Vue({
  el: "#app",
  router,
  store
})
