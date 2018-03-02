<template>
  <div id="app2">
    <h1>Vuex Lessons</h1>
    <div id="lesson01">
      <!-- TODO -->
    </div>
    <div id="demo01">
      <p>Count: {{ $store.state.count }}</p>
      <button v-on:click="increment">+1</button>
      <button v-on:click="decrement">-1</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

<style scoped>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
