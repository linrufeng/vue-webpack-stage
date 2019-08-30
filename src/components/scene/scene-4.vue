<template>
 <isShow :onChanges="ischanges" @isShow="goStart">
    <div class="scene">
        <div class="center">
            <note-show  :option="options" :start="run" slot="note">
                <note-item>
                    本周完成待办<span class="num">{{content.completedTasks}}</span>项
                </note-item>
                <note-item>
                    未完成待办<span class="num">{{content.incompleteTasks}}</span>项
                </note-item>
                <note-item>
                   善于时间管理的人，会把重要的事写入待办
                </note-item>
            </note-show>    
        <div data-swiper-parallax-x="300" class="floorPic">
            <img src="../../asset/img/moon.png" alt="" class='picMoon moon' v-show='run'>
            <img src="../../asset/svg/clock.svg" alt="" class="picClock">
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
        height:6rem;width:6.8rem;
        background:url(../../asset/img/zuihouye-3.png) no-repeat;
        background-size:100% 100%;
        margin:1.4rem auto 0rem;
        position: relative;
    }
    .picMoon{
        height:1.11rem;width:1.14rem;
        position:absolute;
        top:-1.2rem;left:0.3rem;
        opacity: 0;
        animation:moon 2.5s linear;
        animation-fill-mode: forwards;
    }
    .picClock{
        height:1.2rem;width:1.2rem;
        position: absolute;
        left:1rem;
    }

</style>
