<template>
  <div ref="showbox">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit, Watch } from "vue-property-decorator";
@Component
export default class isShow extends Vue {
  eleBox = null;
  viewHeight: number = 0;
  @Prop(Boolean) readonly onChanges!: Boolean;
  @Watch("onChanges") onChildChanged(val: Boolean) {
    let _that: any = this;
    if (val) {
      let show = _that.verInViewport(_that.eleBox);
      this.$emit("isShow", show);
    }
  }
  verInViewport(el) {
    let viewHeight = this.viewHeight;
    let rect = el.getBoundingClientRect();
  
    return rect.top >= -10 && rect.top < viewHeight;
  }
  mounted() {
    let _that: any = this;
    _that.eleBox = _that.$refs.showbox;
    _that.viewHeight = document.body.clientHeight;
  }
}
</script>