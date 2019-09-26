import Vue from 'vue'
import SvgIcon from './svgIcon.vue'
Vue.component('svg-icon', SvgIcon);
const req = require.context('./../../asset/svgSprite', false, /\.svg$/)
const requireAll = requireContext => {
    requireContext.keys().map(requireContext)
}


requireAll(req)