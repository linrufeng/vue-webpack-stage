import Vue from 'vue'
import App from './app.vue'
import router from './router'
import './components/svgIcon'
import axios from 'axios'
Vue.prototype.axios = axios
// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
export default new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

