<template>
    <div @click="tag">`12`12</div>
</template>
<style lang="scss">
.warper{
    font-size: 12px; 
    color:red;
    background: #fff;
    width: 500px;
    height: 200px;
    background: #ddd;
   
}
</style>
<script>
console.log(1)
import '../asset/css/test2.scss';
 import { firstName, lastName, year,incCounter } from '../asset/js/a.js';


export default {
    data(){
        return{
            name:"hello,world!"
        }
    },
    methods:{
        tag(){
            let a =[1];
            let b = [2];
            console.log([...a,...b],"test js",firstName, incCounter())
            new Promise((res,err)=>{
                setTimeout(()=>{
                    console.log(1)
                    res(1)
                },1000)
            })
        }
    },
    
}
</script>
