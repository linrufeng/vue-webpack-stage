 <template> 
 <div class="index-box">
    <div v-show="!reachEnd"  class="floor1">
        <div class="weekbar">
            <span class="lefttime">2019年7月</span>
            <span class="righttime">
                <span class="leftdate">
                    <span class="startdate">07.08</span>
                    <span class="transarrow"></span>
                    <span class="enddate">07.12</span>
                </span>
                <span class="rightarrow"></span>
            </span>
        </div>
    </div> 
    <swiper v-if="swiperOption" :options="swiperOption" ref="mySwiper" class="bgs">         
        <!-- 第一页 ：下班时间  latestDakaTime-->
        <swiper-slide v-if="whileShowContent.latestDakaTime"><Scene1  :show="changeStart" :content="whileShowContent"/></swiper-slide>    
        <!--* 第二页：沟通 totalCommunicate nameOfMostCommunication numberOfMostCommunication latestDeliveryMsgTime + 无数据情况-->
        <swiper-slide><Scene2 :content="whileShowContent"  :show="changeStart"/></swiper-slide>    
        <!-- *第三页: 参加会议  joymeetingCount -->
        <swiper-slide><Scene3 :content="whileShowContent"  :show="changeStart"/></swiper-slide>    
        <!--* 第四页：会议代办项 completedTasks incompleteTasks agencyInfo-->
        <swiper-slide><Scene4 :content="whileShowContent"  :show="changeStart"/></swiper-slide>    
        <!-- 第5页：考勤异常  approvalTasks -->
        <swiper-slide v-if="whileShowContent.approvalTasks"><Scene5 :content="whileShowContent"  :show="changeStart"/></swiper-slide>    
        <!-- 第六页随机 -->
        <swiper-slide><Suiji  :show="changeStart"/></swiper-slide>    
    </swiper>   
    <div v-show="reachEnd" class="floor3">
        <a href="javascript:;" class="todolist">未完成待办</a>
        <a href="javascript:;" class="todolist">待审批流程</a>
        <a href="javascript:;" class="todolist">PMP工时填报</a>
    </div>     
    <div v-show="!reachEnd" class="next-btn" @click="goNext()"><img src="./../asset/svg/swiper-next.svg" alt=""></div>
 </div>
    
</template>
<script lang="ts"> 
import Vue from 'vue';
import Component from 'vue-class-component';
import './../asset/css/swiper.min.css'
import {getWeekDataByType} from './url';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

import {
    Scene1,
    Scene2,
    Scene3,
    Scene4,
    Scene5  
    } from "./../components/scene";
import Suiji from './../components/suiji';
@Component({
     components: {
    swiper,
    swiperSlide,   
    Scene1,
    Scene2,
    Scene3,
    Scene4,
    Scene5,
    Suiji
  }
})
export default class Index extends Vue {
    CurIndex:number = 0;
    Swiper :any = null;    
    swiperOption:any = null;
    reachEnd:boolean = false;
    changeStart:boolean = false;
    whileShowContent:any = {};
    goNext(){
        this.Swiper.slideNext();
        console.log(this.Swiper)
    };
    changeState(){
         let _that:any = this;
          _that.changeStart = true;         
            _that.$nextTick(()=>{
                    _that.changeStart = false;        
            })
    }
    initSwiper(){
        let _that:any = this;
        _that.swiperOption =  {
                direction:'vertical',       
                height : window.innerHeight,
                speed:1000,
             parallax : true,
                on:{                 
                    slideChangeTransitionStart(){           
                        
                        let swiper:any = this;                       
                        _that.CurIndex = swiper.activeIndex+1;       
                         if(swiper.isEnd){
                              _that.reachEnd = true;
                         }else{
                              _that.reachEnd = false;
                         }
                      
                    },    
                    slideChangeTransitionEnd(){
                        _that.changeState()
                    }   ,            
                    init(){
                        let swiper:any = this;                       
                        _that.CurIndex = swiper.activeIndex+1;  
                        let mySwiper:any = _that.$refs.mySwiper;        
                        _that.Swiper = swiper;    
                        _that.changeState()    
                    }        
                }
            }
    }
    async getAllDate(){
        let _that:any = this;
        const sever = await  _that.axios.get(getWeekDataByType)       
        if(sever&&sever.data&&sever.data.content){
            const content = sever.data.content.data;
            this.whileShowContent = content;
            console.log(content)
            this.$nextTick(()=>_that.initSwiper())            
        }
             
    }
    mounted() {          
        this.getAllDate();           
        //  this.initSwiper()
    };
}
</script>
<style lang="scss" scoped>
.floor1{
    height:1.6rem;width:6.86rem;
    margin-left:0.3rem;   
    padding-top:0.3rem; 
    position: absolute;
    .weekbar{
        height:75%;width:95%;
        background:url(./../asset/img/changtiao@2x.png) no-repeat;
        background-size:100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left:0.3rem;
        padding-right:0.3rem;
        color:#0025FF;
        font-weight: bolder;
        font-size:0.3rem;
        .righttime{
            display: flex;
            .leftdate{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                font-size:0.25rem;
                    .transarrow{
                    height:0.1rem;width:0.2rem;
                    background:url(./../asset/img/xiala.png) no-repeat;
                    background-size:100% 100%;
                    margin:0 0.3rem;
                }
            }
            .rightarrow{
                height:0.2rem;width:0.3rem;
                background:url(./../asset/img/xiala.png) no-repeat;
                background-size:100% 100%;
                margin-top:0.3rem;
            }
        }
        
    }
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
.index-box{
    overflow: hidden;
     perspective: 500;
    .next-btn{
        position: absolute;
        z-index: 3;
        bottom: .33rem;
        left:50%;
        transform: translate(-50%,0);
        img{
            width: .42rem;
        }
        animation: jump .6s  ease infinite alternate;
    }
    @keyframes jump {
        100%{         
            transform: translate(-50%,-10px);
        }
    }
    &::after{
        content: '';
        display: block;
        position: absolute;
        width: 400%;
        height: 400%;;
        top:0;
        left:0;
        background: url(./../asset/img/wangge@2x.png) ;
        background-size: 7.5rem auto;      
        perspective-origin: 0% 0%;
        animation: moves 60s infinite;
    }
    @keyframes moves {
        100%{
            transform: translate(-100vh,-100vh);
        }
    }
}

</style>