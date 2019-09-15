<template>
  <div id="app">
    <h1>Vuex Demo - Counter</h1>
    <p>Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.</p>
    <button @click="increment">+</button><br>
    <button @click="decrement">-</button><br>
    <button @click="incrementIfOdd">Increment if odd</button><br>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<style src="@/css/global.css">
/* Note: if scoped for import css, it will NOT take effect! */
</style>

<style scoped>
h1 {
  text-align: center;
}
</style>