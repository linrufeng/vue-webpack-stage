<template>
    <div class="center">
        <div class="floor1 bg-riliwanji"></div>
        <note-show  :option="options" :start="run" slot="note">
            <note-item>有多大的担当就有多大的事业</note-item>
        </note-show> 
        <div data-swiper-parallax-x="300" class="floorPic">
            <img src="../../asset/svg/suiji-riliwanji.svg" class="riliwanji" alt="">
            <img src="../../asset/img/flower.png" class="flower" alt="">
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
    .riliwanji{
        width:100%;height:100%;
        position: absolute;
        z-index: 1;
    }
    .flower{
        width:1.8rem;height:2.5rem;
        position: absolute;
        top:2.3rem;left:.2rem;
        z-index: 0;
        animation: huangdong 2s infinite;
    }
</style>>
