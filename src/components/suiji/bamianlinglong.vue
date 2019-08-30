<template>
<isShow :onChanges="ischanges" @isShow="goStart">
    <div class="center">
        <div class="floor1 bg-bamianlinglong"></div>
        <note-show  :option="options" :start="run" slot="note">
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
    .floor1{
        margin-top:0.4rem;
        margin-left:0.3rem;   
    }
    .floorPic{
        height:7.4rem;width:6.8rem;
        margin:0.6rem auto 0rem;
        position: relative;
    }
    img{
        height:100%;width:100%;
    }
</style>>
