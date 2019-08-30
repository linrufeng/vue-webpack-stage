

import Vue from 'vue'
import { Component, Prop, Emit, Watch } from 'vue-property-decorator'
import  { noteItem, noteShow } from './../note'
import isShow from './../isShow/is-show.vue'
@Component({
    components: {
        noteItem,
        noteShow,
        isShow     
   } 
})  
export default class myMixins extends Vue {
    options={
        interval:.5
    }
    run = false
    ischanges = false
    @Prop(Boolean) readonly show!: boolean
    @Prop(Object) readonly content?: Object
    @Watch('show')
    onChildChanged (val: boolean) {
        this.ischanges = val         
    }
    goStart(val) {
        console.log(val,'show head text')       
        this.run= val
       
    }
}