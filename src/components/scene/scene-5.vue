<template>
 <isShow :onChanges="ischanges" @isShow="goStart">
    <div class="scene">       
        <div class="center">
              <note-show  :option="options" :start="run" slot="note">
                <note-item>
                    考勤异常<span class="num">{{content&&content.queqinNum}}</span>条 
                </note-item>
                <note-item>
                    待审批流程<span class="num">{{ content&&content.agencyInfoCount}}</span>条 
                </note-item>
                <note-item>
                   未完成的事项要尽快处理哦。
                </note-item>
            </note-show> 
            <div data-swiper-parallax-x="-300" class="floorPic">
                <div class="picGroup">
                    <div class="picGroup1 animated flipInX1" v-show='run'></div>
                    <div class="picGroup2 animated flipInX1" v-show='run'></div>
                    <div class="picGroup3 animated flipInX1" v-show='run'></div>
                    <div class="picGroup4 animated flipInX1" v-show='run'></div>
                </div>
                <img  class="picSingle" src="./../../asset/svg/scene-5.svg" alt="">             
            </div>
        </div>
      
    </div>
 </isShow>
</template>
<script>
import myMixins from './common';
export default {  
   mixins:[myMixins]
} 
</script>
<style scoped>   
    .floorPic{
        height:6rem;
        margin:0.2rem auto 0rem;
    }
    .picGroup{
        height:2.2rem;
    }
    .picGroup1,.picGroup2,.picGroup3,.picGroup4{
        height:0.4rem;width: 2.32rem;
        background:url(../../asset/img/Group5.png) no-repeat;
        background-size:100% 100%;
        margin-top:0.1rem;
        margin-left:4.6rem;
        opacity: 0;
        animation-fill-mode: forwards;
    }
    .picGroup2.flipInX1{
        animation-delay: 1s;
    }
    .picGroup3.flipInX1{
        animation-delay: 1.5s;
    }
    .picGroup4.flipInX1{
        animation-delay: 2s;
    }
    .picSingle{
        height:6rem;width:6.8rem;      
        margin-top:-1.5rem;
        z-index: 2;
    }
    
</style>>
