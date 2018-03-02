<template>
  <div id="app2">
    <h1>Vuex Lessons</h1>
    <div id="lesson01">
      <p>Value: {{ count }}</p>
      <p>Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.</p>
      <button v-on:click="increment">+1</button>
      <button v-on:click="decrement">-1</button><br>
      <button @click="incrementIfOdd">Increment if odd</button><br>
      <button @click="incrementAsync">Increment async</button>
    </div>
    <div>
      <p>Recent History (last 5 entries): {{ recentHistory }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'count',
    'evenOrOdd',
    'recentHistory'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
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
