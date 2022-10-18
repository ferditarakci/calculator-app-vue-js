<template>
	<h1 class="title">Calculator App With Vue.js</h1>
	<CalculatorApp />
	<h2 class="repository">
		<a href="https://github.com/ferditarakci/calculator-app-vue-js" title="Calculator App With Vue.js">GitHub Repository</a>
	</h2>
</template>

<script>
import CalculatorApp from "./components/CalculatorApp.vue"

export default {
	name: "App",

	components: {
		CalculatorApp
	}
}
</script>

<style lang="scss">
	@import "./assets/style.scss";
</style>