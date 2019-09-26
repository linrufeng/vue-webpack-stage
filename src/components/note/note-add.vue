<template>
  <div class="note-show"
       ref="noteSwiper">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit, Watch } from "vue-property-decorator";
@Component
export default class NoteShow extends Vue {
  noteSwiper;
  timeInter;
  startIndex = 1;
  @Prop(String) readonly propMessage!: String;
  @Prop(Boolean) readonly start?: Boolean;
  @Prop() readonly option!: {
    interval: number;
  };
  @Watch("start") onChildChanged(val: Boolean) {
    let _that = this;
    const noteSwiper = _that.noteSwiper;
    const lengths = noteSwiper.children.length;
    console.log(val)
    if (val) {
      //  console.log(noteSwiper.children)
      let starInfo = _that.startIndex;
      noteSwiper.children[0]
          ? (noteSwiper.children[0].className = "item item-show")
          : "";
     
      _that.timeInter = setInterval(() => {
        noteSwiper.children[0]
          ? (noteSwiper.children[starInfo].className = "item item-show")
          : "";
        starInfo++;
        if (starInfo >= lengths) {
          clearInterval(_that.timeInter);
        }
      }, _that.option.interval * 1000);
    } else {
      // clearInterval(_that.timeInter);
      // for (let i = 0; i < lengths; i++) {
      //   noteSwiper.children[i].className = "item";
      // }
    }
  }
  mounted() {
    this.noteSwiper = this.$refs.noteSwiper;
  }
}
</script>