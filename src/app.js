import Vue from 'vue';
import App from './app.vue';
import router from './router.js';
import {firstName,incCounter} from './asset/js/a.js';
console.log(firstName,incCounter())
 new Vue({
  router,
  render: h => h(App),
  mounted () {
   
  }
}).$mount('#app');

