<template>
 <isShow :onChanges="ischanges" @isShow="goStart">
    <div class="scene">
        <div class="center">
             <note-show  :option="options" :start="run" slot="note">
                <note-item>
                本周参加会议<span class="num">{{content.joymeetingCount}}</span>场
                </note-item>
                <note-item v-show="content.joymeetingCount !=0">
                    与<span>{{content.nameOfMostCommunication}}</span>沟通次数最多本周给他发送 <span class="num">{{content.numberOfMostCommunication}}</span>条信息
                </note-item>
                <note-item v-show="content.joymeetingCount ==0">
                     安心工作，与世无争
                </note-item>
            </note-show>       
            <div data-swiper-parallax-x="-300" class="floorPic">
                <img src="./../../asset/svg/scene-3-meeting.svg" alt="">
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
        width:6.09rem;     
        margin:1.2rem auto 0;
        position: relative;
        img{
            width:100%;
        }
    }  
</style>>
