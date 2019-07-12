import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './view/index.vue';

const carefree = process.env.NODE_ENV === 'carefree'

//懒加载（按需加载）

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index } 
];

const router = new VueRouter({
	mode:carefree?'hash':'history',
	routes
});

export default router;
