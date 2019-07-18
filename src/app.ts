import Vue from "vue";
import App from './app.vue';
import router from './router.js';
new Vue({
    router,
    render:(h:any) => h(App),
    mounted () { }
  }).$mount('#app');