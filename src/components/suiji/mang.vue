<template>
    <div class="suiji-sence">        
        <div class="floor1"><svg-icon class="lls" icon-class="mang" :width="3.78" :height="1.2"></svg-icon></div>        
        <note-show  :option="options" :start="show" slot="note">
            <note-item>不是在开会，就是在去开会的路上</note-item>
        </note-show>
        <div data-swiper-parallax-x="300" class="floorPic">
            <img src="../../asset/svg/suiji-mang.svg" alt="">
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
