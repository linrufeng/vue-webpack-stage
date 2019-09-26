<template>
    <div class="suiji-sence">
        <!-- <div class="floor1 bg-pin"></div>  377px, 158px-->
            <div class="floor1"><svg-icon class="lls" icon-class="pin" :width="2.55" :height="1.17"></svg-icon></div>
        <note-show  :option="options" :start="show" slot="note">
            <note-item>加班辛苦了，好好犒劳一下自己吧</note-item>
        </note-show>
        <div data-swiper-parallax-x="300" class="floorPic">
            <img src="../../asset/svg/suiji-pin.svg" alt="">
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
        height:7.4rem;width:6.81rem;
        margin:0.4rem auto 0rem;
        position: relative;
    }
    
</style>>
