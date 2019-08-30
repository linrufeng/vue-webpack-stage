<template>
<div class="item">
    <div class="note">
       <span class="left mark"></span>      
        <p class="font"><slot></slot></p>   
        <span class="right mark"></span>        
    </div>
</div>
    
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
const AppProps = Vue.extend()
@Component
export default class Note extends AppProps {
    
}
</script>
