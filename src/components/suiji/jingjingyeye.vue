<template>
<isShow :onChanges="ischanges" @isShow="goStart">
    <div class="suiji-sence">
         <div class="floor1"><svg-icon class="lls" icon-class="jingjingyeye" :width="4.46" :height="1.82"></svg-icon></div>
        
        <note-show  :option="options" :start="show" slot="note">
            <note-item>机会是创造出来的而不是寻觅到的</note-item>
        </note-show>  
        <div data-swiper-parallax-x="300" class="floorPic">
            <img src="./../../asset/svg/suiji-jingjingyeye.svg" class="jingjingyeye" alt="">    
            <img src="../../asset/img/flower.png" class="flower" alt="">      
        </div>
    </div>
</isShow>
</template>
<script>
import myMixins from './../scene/common';
export default {  
    mixins:[myMixins]
}
</script>
<style lang="scss" scoped>
    .floorPic{
        height:7.4rem;width:6.8rem;        
        margin:0.6rem auto 0rem;
        position: relative;
        .jingjingyeye{          
            position: absolute;
            z-index: 1;
        }
        .flower{
            height:4rem;width:3rem;
            position: absolute;
            top:1.3rem;right:0rem;
            z-index: 0;
            animation:huangdong 2s infinite;
        }
    }    
</style>
