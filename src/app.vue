<template>
    <div>
        {{helloMsg}}
        <img src="./asset/svg/clock"/>
        <Hello/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Hello from './component/Hello';
@Component({
//   props: {
//     propMessage: String
//   }
    components: {
        Hello
    }
})
export default class App extends Vue {
  // initial data
  msg: number = 123

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.msg

  // lifecycle hook
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    this.msg = 4;
    this.helloMsg = '你好,'
    // alert('greeting: ' + this.msg)
  }
}
</script>