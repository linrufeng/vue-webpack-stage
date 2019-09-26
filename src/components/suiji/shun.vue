<template>
    <div class="suiji-sence">
        <div class="floor1"><svg-icon class="lls" icon-class="shun" :width="3.48" :height="1.21"></svg-icon></div>        
        <note-show  :option="options" :start="show" slot="note">
            <note-item>好的时间管理，是走向巅峰的第一步</note-item>
        </note-show>
        <div data-swiper-parallax-x="300" class="floorPic">
            <img src="../../asset/svg/suiji-shun.svg" class="shun" alt="">
            <img src="../../asset/img/flower-z.png" class="flower" alt="">
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
        height:6.5rem;width:6.81rem;
        margin:1.2rem auto 0rem;
        position: relative;
        overflow: hidden;
    }
    .shun{      
        position: absolute;
        z-index: 0;
    }
    .flower{
        width:1.5rem;height:2.5rem;
        position: absolute;
        top:3.8rem;left:1rem;
        z-index: 1;
    }

</style>>
