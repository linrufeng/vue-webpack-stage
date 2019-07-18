<template>
    <div class="warper" @click="tag">请求</div>
</template>
<style lang="scss">
.warper{
    font-size: 30px; 
    color:red;
    background: #fff;
    width: 150px;
    height: 60px;
    border-radius: 50px;
    text-align: center;
    line-height: 60px;
    background: #ddd;
}
</style>
<script>
console.log(1)
import '../asset/css/test2.scss';
import { firstName, lastName, year,incCounter } from '../asset/js/a.js';
import axios from 'axios';

export default {
    data(){
        return{
            name:"hello,world!"
        }
    },
    methods:{
        tag(){
            axios.get('/workshop/QueryAllOwnedPets'
            ).then(res=>{
                console.log(res)
            })
        }
    },
    
}
</script>
