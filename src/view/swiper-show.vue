<template>
    
        <Swiper :options="swiperOption" :propMessage="'aggd'" >
            <swiper-slide class="test-1">
                
                    hello,World
                
            </swiper-slide>            
            <swiper-slide class="test-1">
                
                    hello,JDC
                
            </swiper-slide>
            <swiper-slide class="test-1">
               
                    hello,ABC
              
            </swiper-slide>
        </Swiper>        
  
</template>

<script lang="ts">
 import Vue from 'vue';
 import Component from 'vue-class-component';
 import {Swiper,SwiperSlide} from './../components/swiper';
interface options{
     mode:string
 }
 @Component({
     components: {
        Swiper,
        SwiperSlide
    }
 }) 
 export  class Show extends Vue {
     swiperOption:options={
          mode:'full'
     }
 }

</script>

<style lang="scss" >
html,body,#app{
    height: 100%;
}
</style>
<style lang="scss" scoped>
.test-1{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 50px;
    &:nth-of-type(1){
        background: red;
        color: #fff;
    }
    &:nth-of-type(2){
        background: greenyellow;
        color: #fff;
    }
    &:nth-of-type(3){
        background: #000;
        color: #fff;
    }
}
</style>