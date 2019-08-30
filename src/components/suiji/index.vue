<template>
 <isShow :onChanges="ischanges" @isShow="goStart">
    <div class="scene">
        <!-- <Bamianlinglong/> -->
        <Jingjingyeye :show="run"/>
        <!-- <Mang :show="run"/> -->
        <!-- <Nvli :show="run"/> -->
        <!-- <Pin :show="run"/> -->
        <!-- <Riliwanji :show="run"/> -->
        <!-- <Shuang :show="run"/> -->
        <!-- <Shun :show="run"/> -->
        <!-- <Wen :show="run"/>
        <Yemaozi :show="run"/> -->
        <Footer/>
    </div>
 </isShow>
</template>
<script lang="ts">

import{Bamianlinglong,Jingjingyeye,Mang,Nvli,Pin,Riliwanji,Shuang,Shun,Wen,Yemaozi,Footer} from './suiji';
import Vue from 'vue';
import { Component, Prop, Emit, Watch } from 'vue-property-decorator';
import  {mixins}  from 'vue-class-component';
import myMixins from './../scene/common';
@Component({
    components:{
        Bamianlinglong,Jingjingyeye,Mang,Nvli,Pin,Riliwanji,Shuang,Shun,Wen,Yemaozi,Footer
    }
})
export default class Suiji extends mixins(myMixins) {
   
    mounted(){
        this.run=true;
    }
}
</script>