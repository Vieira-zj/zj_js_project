<template>
  <div id="app">
    <Calculator />
    <Coverage />
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'
import Coverage from './components/Coverage.vue'

export default {
  name: 'app',
  components: {
    Calculator,
    Coverage,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
  margin: 20% auto;
}

@media only screen and (min-width: 768px) {
  #app {
    margin: 5% auto;
  }
}
</style>
