<template>
	<div id="app">
        <headers/>
        <router-view v-cloak></router-view>
	</div>
</template>
<script lang="ts">
import headers from './component/head.vue';
export default {
    components:{
        headers
    }
}
</script>
