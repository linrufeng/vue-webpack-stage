<template>
    <div>
        <!-- <Scene1 :run='run'></Scene1> -->
        <!-- <Scene2 :run='run'></Scene2> -->
        <!-- 
        <Scene4 :run='run'></Scene4> -->
        <!-- <Scene5 :run='self'></Scene5>  -->
        <!-- <Scene1 :onshow="true"/> -->
        <!-- <index :show="self"></index> -->
        <!-- <index :show='self'/> -->
        <!-- <bamianlinglong></bamianlinglong> -->
        <!-- <jingjingyeye></jingjingyeye> -->
        <!-- <mang></mang> -->
        <!-- <nvli></nvli> -->
        <!-- <pin></pin> -->
        <!-- <riliwanji></riliwanji> -->
        <shuang></shuang>
        <shun></shun>
        <wen></wen>
        <yemaozi></yemaozi>
        <jingjingyeye></jingjingyeye>
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
import mang from './../components/suiji/mang';
import shuang from './../components/suiji/shuang';
import pin from './../components/suiji/pin';
import nvli from './../components/suiji/nvli';
import jingjingyeye from './../components/suiji/jingjingyeye';
import bamianlinglong from './../components/suiji/bamianlinglong';
import riliwanji from './../components/suiji/riliwanji';
import shun from './../components/suiji/shun';
import wen from './../components/suiji/wen';
import yemaozi from './../components/suiji/yemaozi';
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
        shuang,
        pin,
        jingjingyeye,
        bamianlinglong,
        mang,
        nvli,
        riliwanji,
        wen,
        yemaozi
    }
}
</script>