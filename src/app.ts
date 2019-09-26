import Vue from 'vue'
import App from './app.vue'
import router from './router'
import './components/svgIcon'
import axios from 'axios'
// import Vconsole from 'vconsole'
// let vConsole=new Vconsole()
axios.defaults.withCredentials = true
Vue.prototype.axios = axios
// Vue.prototype.test = 1
// 阻止 vue 在启动时生成生产提示
// Vue.config.productionTip = false
export default new Vue({
    el: '#app',
    data(){
        return{
            abc:1
        }
    },
    router,
    render: h => h(App)
})

