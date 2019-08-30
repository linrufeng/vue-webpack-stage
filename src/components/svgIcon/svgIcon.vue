<template>
  <svg  :class="svgClass" 
        :style="{
            'width':`${width}rem`,
            'height':`${height}rem`
        }" 
        aria-hidden="true" >
    <use :xlink:href="iconName" ref="svgRefs"></use>
  </svg>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop} from 'vue-property-decorator'; 
@Component
export default class svgIcon extends Vue { 
    name:string =  'svg-icon'
    @Prop(String) iconClass ;
    @Prop(String) className ;
    @Prop(Number) width ;
    @Prop(Number) height ;
    get iconName():string {
        return `#icon-${this.iconClass}`
    }
    get svgClass(): string{
        if (this.className) {
            return 'svg-icon ' + this.className
        } else {
            return 'svg-icon'
        }
    }  
}
</script>

<style scoped>
.svg-icon {  
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>