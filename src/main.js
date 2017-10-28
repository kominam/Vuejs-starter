import Vue from 'vue';
import router from './routes/index'
import navBar from '@components/navBar';
import store from './store/store';

require('../bootstrap/bootstrap');

Vue.component('navBar', navBar);

new Vue({
  el: "#app",
  router,
  store
});
