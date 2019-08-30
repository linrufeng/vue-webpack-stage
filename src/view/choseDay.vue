<template>
    <div class="scene">
        <div class="floor">
            <p>date</p>
            <router-link  v-for="(item,i) of items" :key="i" :to="{path:'/',params:{year:item.year,month:item.month,startDate:item.startDate,endDate:item.endDate}}">
                <div class="weekbar" >
                    <span class="lefttime">{{item.year}}年{{item.month}}月</span>
                    <span class="righttime">
                        <span class="leftdate">
                            <span class="startdate">{{item.startDate}}</span>
                            <span class="transarrow"></span>
                            <span class="enddate">{{item.endDate}}</span>
                        </span>
                        <span class="rightarrow"></span>
                    </span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import myMixins from './../components/scene/common';
import {getWeekTypeList} from './url';
axios.default.withCredentials=true;
export default {
    mixins:[ myMixins],
    data(){
        return {
            // titleDate:[],
            items:[]
        }
    },
    methods:{

    },
    created(){ 
        this.axios.get(getWeekTypeList).then(res=>{
            let list=res.data.content.data;
            for(var val of list){
               var start=new Date();
               start.setTime(val.startDate);
               var startMonth=start.getMonth()+1;
               var startDay=start.getDate();
               var startTime=(startMonth<10?'0'+startMonth:startMonth)+'.'+(startDay<10?'0'+startDay:startDay)
               val.startDate=startTime;
               
               var end=new Date();
               end.setTime(val.endDate);
               var endMonth=end.getMonth()+1;
               var endDay=end.getDate();
               var endTime=(endMonth<10?'0'+endMonth:endMonth)+'.'+(endDay<10?'0'+endDay:endDay)
               val.endDate=endTime;

               this.items.unshift(val);
            }
        });
    }
}
</script>
<style scoped>   
    .floor{
        width:7.1rem;
        margin-left:0.2rem;
        padding-top:0.3rem; 
    }
    .floor p{
        width: 2.0rem;height:0.4rem;
        line-height: 0.4rem;
        font-size: 0.35rem;
        font-weight: bold;
        color: rgba(0,37,255,1);
        margin-bottom: 0.1rem;
    }
    .floor .weekbar{
        height:0.9rem;width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left:0.3rem;
        padding-right:0.3rem;
        color:#0025FF;
        font-weight: bolder;
        font-size:0.4rem;
        border: 0.05rem solid rgba(0,37,255,1);
        border-radius: 0.2rem;
    }
    .weekbar~.weekbar{
        margin-top:0.1rem;
    }
    .floor .weekbar .righttime{
        display: flex;
    }
    .floor .weekbar .righttime .leftdate{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size:0.25rem;
    }
    .floor .weekbar .righttime .leftdate .transarrow{
        height:0.1rem;width:0.2rem;
        background:url(./../asset/img/xiala.png) no-repeat;
        background-size:100% 100%;
        margin:0 0.3rem;
    }
    .floor .weekbar .righttime .rightarrow{
        height:0.2rem;width:0.3rem;
        background:url(./../asset/img/xiala.png) no-repeat;
        background-size:100% 100%;
        margin-top:0.3rem;
    }
   .floor~.floor{
       margin-top:0.6rem;
   }
</style>>
