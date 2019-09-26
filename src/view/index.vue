 <template>
  <div class="index-box">
  <div v-show="!reachEnd"
        class="floor1">        
    <div class="weekbar">
        <router-link to="/choseday"> </router-link>
       <svg-icon class="lls" icon-class="select" :width="6.86" :height="1"></svg-icon>
      <span class="lefttime">{{dayDate.year || weekList[0]&&weekList[0].year}}年{{dayDate.month ||  weekList[0]&&weekList[0].month}}月</span>
      <span class="righttime">
        <span class="leftdate">
          <span class="startdate">{{dayDate.startDate|| weekList[0]&&weekList[0].startDate}}</span>
          <span class="transarrow"></span>
          <span class="enddate">{{dayDate.endDate || weekList[0]&&weekList[0].endDate}}</span>
        </span>
        <span class="rightarrow"></span>
      </span>
    </div>
  </div>
    <swiper v-if="swiperOption"
            :options="swiperOption"
            ref="mySwiper"
            class="bgs">
      <!-- 第一页 ：下班时间  latestDakaTime-->
      <swiper-slide v-if="whileShowContent.latestDakaTime">
        <Scene1 :show="changeStart"
                :content="whileShowContent" />
      </swiper-slide>
      <!--* 第二页：沟通 totalCommunicate nameOfMostCommunication numberOfMostCommunication latestDeliveryMsgTime + 无数据情况-->
      <swiper-slide>
        <Scene2 :content="whileShowContent"
                :show="changeStart" />
      </swiper-slide>
      <!-- *第三页: 参加会议  joymeetingCount -->
      <swiper-slide>
        <Scene3 :content="whileShowContent"
                :show="changeStart" />
      </swiper-slide>
      <!--* 第四页：会议代办项 completedTasks incompleteTasks agencyInfo-->
      <swiper-slide>
        <Scene4 :content="whileShowContent"
                :show="changeStart" />
      </swiper-slide>
      <!-- 第5页：考勤异常  approvalTasks -->
      <swiper-slide v-if="whileShowContent.agencyInfoCount || whileShowContent.queqinNum">
        <Scene5 :content="whileShowContent"
                :show="changeStart" />
      </swiper-slide>
      <!-- 第六页随机 -->
      <swiper-slide>
        <Suiji :content="whileShowContent"
               :show="changeStart" />
      </swiper-slide>
    </swiper>  
    <div v-show="!reachEnd"
         class="next-btn"
         @click="goNext()"><img src="./../asset/svg/swiper-next.svg"
           alt=""></div>
  </div>

</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit, Watch } from 'vue-property-decorator'
import "./../asset/css/swiper.min.css";
import { getWeekDataByType,getWeekTypeList } from "./url";
import { swiper, swiperSlide} from "vue-awesome-swiper";
import { Scene1, Scene2, Scene3, Scene4, Scene5 } from "./../components/scene";
import Suiji from "./../components/suiji";
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
　　 return (arr=document.cookie.match(reg))?unescape(arr[2]):null;
}
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
  CurIndex: number = 0;
  Swiper: any = null;
  swiperOption: any = null;
  reachEnd: boolean = false;
  changeStart: boolean = false;
  whileShowContent: any = {};
  dayDate = {}; 
  @Prop(Array) readonly weekList?: []
  goNext() {
    this.Swiper.slideNext(); 
  }
  changeState() {
    let _that: any = this;
    _that.changeStart = true;
    _that.$nextTick(() => {
      _that.changeStart = false;
    });
  }
  initSwiper() {
    let _that: any = this;
    _that.swiperOption = {
      direction: "vertical",
      height: window.innerHeight,
      speed: 1000,
      parallax: true,
      on: {
        slideChangeTransitionStart() {
          let swiper: any = this;
          _that.CurIndex = swiper.activeIndex + 1;
          if (swiper.isEnd) {
            _that.reachEnd = true;
          } else {
            _that.reachEnd = false;
          }
        },
        slideChangeTransitionEnd() {
          _that.changeState();
        },
        init() {
          let swiper: any = this;
          _that.CurIndex = swiper.activeIndex + 1;
          let mySwiper: any = _that.$refs.mySwiper;
          _that.Swiper = swiper;
          _that.changeState();
        }
      }
    };
  }
  async getAllDate() {
    let _that: any = this;
      var usethird_name =  getCookie('third_name') || 'zhangyufei1';  
    const sever = await _that.axios.get(getWeekDataByType,{
        params:{
          userName:usethird_name
        }
      });
      // const sever = await _that.axios.get(getWeekDataByType);
      if (sever && sever.data && sever.data.content) {
        const content = sever.data.content.data;
        this.whileShowContent = content;     
        this.$nextTick(() => _that.initSwiper());
      }
   
  }
  mounted() {
    this.dayDate = this.$route.query;
    // this.getAllDate();
    this.initSwiper();
  }
}
</script>
<style lang="scss" scoped>
.floor1 {
  height: 1.6rem;
  width: 6.86rem;
  top:.3rem;
  left:50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 999;
  .weekbar {    
    height: 1rem;
    width: 6.86rem;    
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    color: #0025ff;
    font-weight: bolder;
    font-size: 0.3rem;
    position: relative;
    a{
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 99;
      top:0;
      left:0;
    }
    .lls{
      position: absolute;
      z-index: 0;
      top:0;left: 0;
    }
    .lefttime{
        position: relative;
      z-index: 1;
    }
    .righttime {
      position: relative;
      z-index: 1;
      display: flex;
      .leftdate {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 0.25rem;
        .transarrow {
          height: 0.1rem;
          width: 0.2rem;
          background: url(./../asset/img/xiala.png) no-repeat;
          background-size: 100% 100%;
          margin: 0 0.3rem;
        }
      }
      .rightarrow {
        height: 0.2rem;
        width: 0.3rem;
        background: url(./../asset/img/xiala.png) no-repeat;
        background-size: 100% 100%;
        margin-top: 0.3rem;
      }
    }
  }
}
.floor3 {
  height: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.floor3 .todolist {
  height: 0.6rem;
  line-height: 0.6rem;
  padding: 0 0.1rem;
  color: #0025ff;
  font-size: 0.2rem;
  font-weight: bold;
  margin-top: 0.45rem;
  border: 1px solid #0025ff;
  border-radius: 1.1rem;
  background-color: #fee500;
}
.todolist ~ .todolist {
  margin-left: 0.2rem;
}
.index-box {
  overflow: hidden;
  .next-btn {
    position: absolute;
    z-index: 3;
    bottom: 0.33rem;
    left: 50%;
    transform: translate(-50%, 0);
    img {
      width: 0.42rem;
    }
    animation: jump 0.6s ease infinite alternate;
  }
  @keyframes jump {
    100% {
      transform: translate(-50%, -10px);
    }
  }
}
.bgs {
  perspective: 500;
  overflow: hidden;
  height: 100vh;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 0;
    background: url(./../asset/img/gezi.png);
    background-size: 10px 10px;
    transform: rotateY(1deg);
    perspective-origin: 0% 0%;
    opacity: .2;
    animation:  runtop .8s linear reverse infinite;
  }
  @keyframes runtop {
    to{
      transform: translate3d(-10px,-10px,0);
    }
  }
  .swiper-wrapper {
    perspective: 500;
  }
  .swiper-slide {
    transform: skew(-1deg);
    perspective-origin: 0% 0%;
  }
}
</style>