<template>
 <isShow :onChanges="ischanges" @isShow="goStart">
    <div class="scene">
        <div class="center">
         <note-show  :option="options" :start="run" slot="note">
            <note-item>
                本周沟通<span class="num">{{content.totalCommunicate}}</span>人 
            </note-item>
            <note-item>
            与<span>{{content.nameOfMostCommunication}}</span>沟通次数最多本周给他发送 <span class="num">{{content.numberOfMostCommunication}}</span>条信息
            </note-item>
            <note-item>
               最晚回复消息<span class="num">{{content.latestDeliveryMsgTime}}</span> 
            </note-item>
            <!-- <note-item>
               此时不撩，更等何时
            </note-item> -->
        </note-show>
        <div data-swiper-parallax-x="300" class="floorPic">
            <img src="../../asset/svg/clock.svg" class="picClock">
            <img src="../../asset/img/qipao.png" class="picQipao1 animated flipInX1" v-show='run'>
            <img src="../../asset/img/qipao.png" class="picQipao2 animated flipInX1" v-show='run'>
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
        height:5.5rem;width:6.8rem;
        background:url(../../asset/img/2.png) no-repeat;
        background-size:100% 100%;
        margin:1.8rem auto 0rem;
        position: relative;
    }
    .picClock{
        height:1rem;width:1rem;
        position: absolute;
        top:-1rem;left:0.5rem;
        animation-iteration-count: infinite;
        animation-duration: 4s;
    }
    .picQipao1,.picQipao2{
        height:0.6rem;width:2.38rem;
        position: absolute;
        opacity:0;
        animation-fill-mode: forwards;
    }
    .picQipao1{
        top:-0.8rem;left:4rem;
    }
    .picQipao2{
        left:4rem;
        animation-delay: 1s;
    }

    /* 设置长条动画延迟 */
    .container2_2.myfadein{
        animation-delay: 1s;
    }
    .container2_3.myfadein{
        animation-delay: 2s;
    }
</style>>
