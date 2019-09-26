<template>
<isShow :onChanges="ischanges" @isShow="goStart">
    <div class="suiji-sence">
        <!-- <div class="floor1 bg-bamianlinglong"></div> 770px, 254px, -->
        <div class="floor1"><svg-icon class="lls" icon-class="bamianlinglong" :width="5.16" :height="1.82"></svg-icon></div>
        <note-show  :option="options" :start="show" slot="note">
            <note-item>沟通是解决问题的唯一途径</note-item>
        </note-show>
        <div data-swiper-parallax-x="300" class="floorPic">
            <img src="../../asset/svg/suiji-bamianlinglong.svg" alt="suiji-bamianlinglong">
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
<style scoped>  
    .floorPic{
        height:7.4rem;width:6.8rem;
        margin:0.6rem auto 0rem;
        position: relative;
    }   
</style>>
