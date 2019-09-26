<template>
	<div id="app">
        <router-view v-cloak :weekList="weekList"></router-view>
	</div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import {getWeekTypeList} from './view/url';
    interface list {
            year:string;
            month:string;          
            startDate:string;
            endDate:string;
    }
    
    @Component
    export default class App extends Vue {   
        weekList:list[]=[]
        setDay(val){
            const date=new Date();
            date.setTime(val);
            const endMonth=date.getMonth()+1;
            const endDay=date.getDate();
            const fendMonth = (endMonth<10?'0'+endMonth:endMonth);
            const fendDay = (endDay<10?'0'+endDay:endDay)   
            return `${fendMonth}.${fendDay}`
        }
        getWeekTypeList(){
            let _that:any = this;
            _that.axios.get(getWeekTypeList).then(res=>{
                let list=res.data.content.data;
                let temp:list []= [];
                list.forEach(item=>{
                    let {year,month,startDate,endDate}:list = item;
                    temp.push({
                        "year":year,
                        "month":month,
                        "startDate": _that.setDay(startDate),
                        "endDate":_that.setDay(endDate)
                    })
                })      
                //temp.reverse();               
                 _that.weekList = temp;               
            });
        }
        
        mounted() {
            this.getWeekTypeList()
        }
    }
</script>
<style lang="scss" >
    @import url('./asset/css/common.scss')
</style>
