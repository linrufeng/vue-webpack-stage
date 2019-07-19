<template>
  <p>hello times: {{ time }}</p>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Hello extends Vue {
  helloTimes: number = 0;
  time:String = '';
  sayHello () {
    let time = new Date();
    let ms = this.helloTimes++;
    let mss = (ms*60/1000);
   this.time = time.getHours()+':' +time.getMinutes()+':'+time.getSeconds()+":"+mss;
   if(ms>=1000){
      this.helloTimes = 0;
    }
  }
  mounted() {
    setInterval(()=>{
      this.sayHello()
    },1)
  }
}
</script>

