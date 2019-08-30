<template>
<isShow :onChanges="ischanges" @isShow="goStart">
    <div class="center">
        <div class="floor1 bg-wen"></div>
        <note-show  :option="options" :start="run" slot="note">
            <note-item>好的心态，决定一切事情</note-item>
        </note-show>  
        <div data-swiper-parallax-x="300" class="floorPic">
            <img src="../../asset/svg/suiji-wen.svg" class="wen" alt="" >
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
    .wen{
        width:100%;height:100%;
        position: absolute;
        z-index: 1;
    }
    .flower{
        width:2rem;height:3.5rem;
        position: absolute;
        top: 2.95rem;left:0rem;
        z-index:0;
        animation:huangdong 2s infinite;
    }
</style>>
