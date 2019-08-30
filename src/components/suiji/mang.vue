<template>
    <div class="center">        
        <div class="floor1"><svg-icon class="lls" icon-class="mang" :width="2.575" :height=".69"></svg-icon></div>        
        <note-show  :option="options" :start="run" slot="note">
            <note-item>熬夜一时爽，一直熬夜一直爽</note-item>
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
    .floor1{
        margin-top:0.4rem;
        margin-left:0.3rem;   
    }
    .floorPic{
        height:7.4rem;width:6.81rem;
        margin:0.4rem auto 0rem;
        position: relative;
    }
    img{
        height:100%;width:100%;
    }

</style>>
