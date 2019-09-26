import Vue from 'vue'
import VueRouter from 'vue-router'



const carefree = true //process.env.NODE_ENV === 'carefree'
// 懒加载（按需加载）
import Index from './view/index.vue'
const test = () => import('./view/test.vue')
const choseday = () => import('./view/choseDay.vue')
Vue.use(VueRouter)

const routes = [
    { path: '/weekSummary/index.html', component: Index }, 
    { path: '/', component: Index }, 
    { path: '/test', component: test },   
    { path:'/choseday',component:choseday }
]
const router = new VueRouter({
    mode:'hash',
    routes
})

export default router
