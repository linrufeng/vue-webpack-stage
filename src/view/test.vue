<template>
    <div>
        <!-- <Scene1 :run='run'></Scene1> -->
        <!-- <Scene2 :run='run'></Scene2> -->
        <!-- 
        <Scene4 :run='run'></Scene4> -->
        <!-- <Scene5 :run='run'></Scene5>  -->
        <!-- <Scene1 :onshow="true"/> -->
        <!-- <index :show="self"></index> -->
        <!-- <index :show='self'/> -->
        <!-- <bamianlingrong></bamianlingrong> -->
        <!-- <jingjingyeye></jingjingyeye> -->
        <!-- <mang></mang> -->
        <!-- <nvli></nvli> -->
        <!-- <pin></pin> -->
        <!-- <riliwanji></riliwanji> -->
        <shuang></shuang>
        <!-- <shun></shun> -->
        <!-- <wen></wen> -->
        <!-- <yemaozi></yemaozi> -->
    </div>
</template>
<script>

import {
    Scene1,
    Scene2,
    Scene3,
    Scene4,
    Scene5   
    } from "./../components/scene";
import shun from './../components/suiji/shun';
import shuang from './../components/suiji/shuang';

export default {
    data(){
        return {
            self:false
        } 
    },
    mounted(){
        this.self=true;
    },
    components:{
        Scene1,
        Scene2,
        Scene3,
        Scene4,
        Scene5,
        shun,
        shuang
    }
}
</script>