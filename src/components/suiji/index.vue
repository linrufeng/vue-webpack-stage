<template>
 <isShow :onChanges="ischanges" @isShow="goStart">
    <div class="suiji-center">
        <Pin :show="run" v-if="content.workHousr>=48"/>
        <Mang :show="run" v-else-if="content.joymeetingCount>=8"/>
        <Yemaozi :show="run" v-else-if="content.latestDakaTime>=11 || content.latestDeliveryMsgTime>=11 || content.latestApprovalTime>=11"/>
        <Shun :show="run"  v-else-if="content.createAgencyTasks>10" />
        <Bamianlinglong :show="run" v-else-if="content.totalCommunicate>=30" />
        <Shuang :show="run" v-else-if="content.workHousr<=24" />
        <Riliwanji :show="run" v-else-if="content.approvalTasks>30" />
        <Jingjingyeye :show="run"  v-else-if="content.completedTasks>10"/>
        <Wen :show="run"  v-else-if="content.incompleteTasks<3"/>
        <Nvli :show="run" v-else/>
        <!-- <Footer :whileShowContent ="content"/> -->
        <div class="floor3container">
            <div class="floor3">          
                  <a href="javascript:;" @click="todo" v-if="content.incompleteTasks"
                     class="todolist">未完成待办</a>
                  <a href="javascript:;"
                     @click="toapproval" class="todolist" v-if="content.agencyInfoCount">待审批流程</a>
                  <a href="javascript:;"
                     class="todolist" @click="topmp">PMP工时填报</a>  
            </div>
        </div>
    </div>
 </isShow>
</template>
<script lang="ts">

import{Bamianlinglong,Jingjingyeye,Mang,Nvli,Pin,Riliwanji,Shuang,Shun,Wen,Yemaozi} from './suiji';
import Vue from 'vue';
import { Component, Prop, Emit, Watch } from 'vue-property-decorator';
import  {mixins}  from 'vue-class-component';
import myMixins from './../scene/common';
import  './../../asset/JDME-JSSDK';
import './common.scss';
let jmemy = (window as any).jme;
@Component({
    components:{
        Bamianlinglong,Jingjingyeye,Mang,Nvli,Pin,Riliwanji,Shuang,Shun,Wen,Yemaozi
    }
})
export default class Suiji extends mixins(myMixins) {

    todo(){
        jmemy.applet.openAppletUrl({
            url: 'jdme://jm/biz/workbench/task/list',
            success: function(data) {
                alert(1);
            }
        })
    }
    toapproval(){
         jmemy.applet.openAppletUrl({
            url: 'jdme://appcenter/flowcenter/approve',
            success: function(data) {
                alert(2);
            }
        })
    }
    topmp(){
        console.log(jmemy); 
        // jmemy.applet.openAppletUrl({
        //     url: 'jdme://me/attendance',
        //     success: function(data) {
        //         alert(3);
        //     }
        // })
        //  jmemy.browser.openUrl({
        //     url: 'jdme://appcenter/flowcenter/approve',
        //     type: 3
        // })
        jmemy.browser.openUrl({
            url: 'jdme://jm/biz/workbench/task/list',
            type:3
        })
    }
    mounted(){      
        let content:any =  this.content;
        let time = content.latestDakaTime;
        let Hours = time?Number(time.split(":")[0]):'';   
        content.latestDakaTime=Hours;
        let time1 = content.latestDeliveryMsgTime;
        let Hours1 = time?Number(time.split(":")[0]):''; 
        content.latestDeliveryMsgTime=Hours1;
        let time2 = content.latestApprovalTime;
        let Hours2 = time?Number(time.split(":")[0]):''; 
        content.latestApprovalTime=Hours2;
    }
    
}
</script>


<style scoped>
     .floor3container{
        width:100%;
        position:fixed;
        top:90%;left:50%;
        transform: translate(-50%,-50%);
        z-index:1000;
     }
     .floor3 {
        height:1.5rem;width:100%;
        display:flex;
        justify-content: center;
        margin:0 auto;
    }
    .floor3 .todolist{
        height:0.6rem;
        line-height: 0.6rem;
        padding:0 0.1rem; 
        color:#0025FF;
        font-size:0.2rem;
        font-weight:bold;
        margin-top:0.45rem;
        border:1px solid #0025FF;
        border-radius: 1.1rem;
        background-color: #FEE500;
    }
    .todolist~.todolist{
        margin-left:0.2rem;
    }
</style>