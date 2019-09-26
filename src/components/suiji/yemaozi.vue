<template>
    <div class="suiji-sence">
         <div class="floor1"><svg-icon class="lls" icon-class="yemaozi" :width="3" :height="1.6"></svg-icon></div>
        <note-show  :option="options" :start="show" slot="note">
            <note-item>熬夜一时爽，一直熬夜一直爽</note-item>
        </note-show>
        <div data-swiper-parallax-x="300" class="floorPic">
            <img src="../../asset/svg/suiji-yemaozi.svg" alt="">
        </div>
    </div>
</template>
<script>
import myMixins from './../scene/common';
export default {
    mixins:[myMixins]
}
</script>
<style scoped> 
    .floorPic{
        height:6.8rem;width:6.8rem;
        margin:1.5rem auto 0rem;
        position: relative;
    }
</style>>
