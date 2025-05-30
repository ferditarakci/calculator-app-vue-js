<template>
  <div>
    <h1 class="title">Calculator App With Vue.js</h1>
    <CalculatorApp />
    <h2 class="repository">
      <a
        href="https://github.com/ferditarakci/calculator-app-vue-js"
        title="Calculator App With Vue.js"
      >
        GitHub Repository
      </a>
    </h2>
  </div>
</template>

<script>
import CalculatorApp from '@/components/CalculatorApp'

export default {
  name: 'App',

  components: {
    CalculatorApp,
  },
}
</script>

<style lang="scss">
@use '@/assets/style.scss';
</style>
