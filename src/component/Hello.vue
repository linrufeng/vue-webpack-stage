<template>
  <p>{{ time }}</p>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class Hello extends Vue {
  helloTimes: number = 0;
  time:String = '';
  checkedArray:Array<string> = ['lls','lilinsen','linsen2'];
  sayHello () {
    let time = new Date();
    this.time = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
    
  }
  mounted() {
    setInterval(()=>{
      this.sayHello()
    },1000);
    this.checkedArray.includes('lls');
  }
}
</script>

