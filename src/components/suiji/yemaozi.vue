<template>
    <div class="center">
        <div class="floor1 bg-yemaozi"></div>
        <note-show  :option="options" :start="run" slot="note">
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
    .floor1{
        margin-top:0.4rem;
        margin-left:0.3rem;   
    }
    .floorPic{
        height:6.8rem;width:6.8rem;
        margin:1.5rem auto 0rem;
        position: relative;
    }
    img{
        width:100%;height:100%;
    }
    
</style>>
