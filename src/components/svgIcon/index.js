import Vue from 'vue'
import SvgIcon from './svgIcon.vue'
Vue.component('svg-icon',SvgIcon);

const requireAll = requireContext => 
{
    requireContext.keys().map(requireContext)
}

const req = require.context('./../../asset/svgSprite', false, /\.svg$/)
requireAll(req)