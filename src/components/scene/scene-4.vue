<template>
 <isShow :onChanges="ischanges" @isShow="goStart">
    <div class="scene">
        <div class="center">
            <note-show  :option="options" :start="run" slot="note">
                <note-item v-show="content.completedTasks!=0">
                    本周完成待办<span class="num">{{content.completedTasks}}</span>项
                </note-item>
                <note-item v-show="content.completedTasks!=0">
                    未完成待办<span class="num">{{content.incompleteTasks}}</span>项
                </note-item>
                <note-item>
                   {{msg}}
                </note-item>
            </note-show>    
        <div data-swiper-parallax-x="300" class="floorPic">                       
            <img src="./../../asset/svg/scene-4.svg" alt="">
            <img src="./../../asset/img/flower.png" alt="" class="flower">  
        </div>
        </div>
    </div>
 </isShow>
</template>
<script>
import myMixins from './common';
export default {   
    mixins:[myMixins],
    computed:{
        msg:function(){
            let msg = "";
            //完成代办 未完成代办
            let {completedTasks,incompleteTasks} = this.content;
            if(completedTasks==0){
                msg="善于时间管理的人，会把重要的事写入待办";
            }
            else if(completedTasks>0&&incompleteTasks==0){
                msg = "完成所有的待办，是走向成功的第一步。"
            }else if(incompleteTasks>0){
                msg = "没有完成的，这周安排上！"
            }
            return msg;
        }
    }
}

</script>
<style scoped lang="scss">
    .floorPic{
        width:6.6rem;            
        margin:1.4rem auto 0rem;
        position: relative;
        img{position: relative;
        z-index: 1;
            width: 100%;}
        .flower{
            position: absolute;
            width: 2.04rem;
            right: .1rem;
            bottom: 1.5rem;
            z-index: 0;
            left: 0;
         
        }
    }
    

</style>
