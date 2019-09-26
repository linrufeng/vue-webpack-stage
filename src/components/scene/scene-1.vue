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
                   {{showMSg}}
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
    mixins:[myMixins],
    computed:{
        showMSg:function(){
            let msg = '';
            let time = this.content.latestDakaTime;
            console.log(time)
            if( typeof time === 'number'){
                let Hours = time;
                 if(Hours<19){
                msg = "作息规律，生活健康";
            }else if(Hours>19&&Hours<=21){
                 msg = "工作那么多，我得加班干！";
            }else if(Hours>21&&Hours<=23){
                msg = "加班还是要有的，万一加薪了呢";
            }else if(Hours>23 || Hours<6){
                msg="熬夜，是为了自由"
            }
            }
            // let Hours = time?Number(time.split(":")[0]):'';           
            // if(Hours<19){
            //     msg = "作息规律，生活健康";
            // }else if(Hours>19&&Hours<=21){
            //      msg = "工作那么多，我得加班干！";
            // }else if(Hours>21&&Hours<=23){
            //     msg = "加班还是要有的，万一加薪了呢";
            // }else if(Hours>23 || Hours<6){
            //     msg="熬夜，是为了自由"
            // }
            return msg
        }
    }
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
