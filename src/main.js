import Vue from 'vue';
import navBar from './components/navBar.vue';

require('../bootstrap/bootstrap');

Vue.component('navBar', navBar);

new Vue({
  el: "#app",
  render: h => h(navBar),
});
