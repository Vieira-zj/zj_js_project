<template>
  <div id="counter03">
    <h3>Vuex Lessons 03</h3>
    <div>
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
  name: 'Counter03',
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
