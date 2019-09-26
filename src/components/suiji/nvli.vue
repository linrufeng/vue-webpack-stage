<template>
  <div class="suiji-sence">
    <!-- <div class="floor1 bg-nvli myanimate"></div> -->
       <div class="floor1"><svg-icon class="lls" icon-class="nvli" :width="3.78" :height="1"></svg-icon></div>        
    <note-show :option="options"
               :start="show"
               slot="note">
      <note-item>奋斗路上，好好照顾自己</note-item>
    </note-show>
    <div data-swiper-parallax-x="300"
         class="floorPic">
      <img src="../../asset/svg/suiji-nuli.svg"
           class="nvli"
           alt="">
      <img src="../../asset/img/flower.png"
           class="flower"
           alt="">
    </div>
  </div>
</template>
<script>
import myMixins from "./../scene/common";
export default {
  mixins: [myMixins]
};
</script>
<style scoped>

.floorPic {
  height: 7.4rem;
  width: 6.8rem;
  margin: 0.4rem auto 0rem;
  position: relative;
  overflow: hidden;
}
.nvli {
  
  position: absolute;
  z-index: 1;
}
.flower {
  width: 3rem;
  height: 4rem;
  position: absolute;
  top: 0.68rem;
  right: -0.5rem;
  z-index: 0;
  animation: huangdong 2s infinite;
}
</style>>
