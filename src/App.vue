<template>
    <div id="app">
		<Header/>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from './pages/Header.vue'
export default {
	name:"app",
	components: {
		Header
	}
}
</script>

<style>

</style>
