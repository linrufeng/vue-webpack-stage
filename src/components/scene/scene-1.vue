<template>
    <isShow :onChanges="ischanges" @isShow="goStart">
    <div class="scene">
        <div class="center">     
            <note-show  :option="options" :start="run" slot="note">
                <note-item>
                    最晚下班时间<span class="num">{{content.latestDakaTime}}</span>
                </note-item>
                <note-item>
                    超过了<span class="num">60%</span>的JDer
                </note-item>
                <note-item>
                    加班还是要有的，万一加薪了呢
                </note-item>
            </note-show>
            <div data-swiper-parallax-x="-300" class="floorPic">                
                 <img src="./../../asset/svg/scence-1-sweeping.svg"  alt="" class="sweep">      
                 <img src="./../../asset/img/flower.png" alt="" class="flower">  
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
<style lang="scss" scoped>     
    .floorPic{
        width:6.8rem;       
        background-size:100% 100%;
        margin:0.8rem auto 0rem;
        position:relative;
        img{           
            width: 100%;          
        }
        .sweep{
            position: relative;
            z-index: 1;
        }
        .flower{
            position: absolute;
            width: 2.04rem;
            right: .1rem;
            top:1rem;
            animation: huangdong 3s ease infinite;
        }
        
        
    } 
</style>>
