<template>
  <div id="counter02">
    <h3>Vuex Lesson 02</h3>
    <div>
      <h4>Vuex State</h4>
      <p>{{ textLocalCount }}</p>
      <p>Global Count: {{ count }}</p>
      <p>Total: {{ countPlusLocalState }}</p>
      <p>Recent History (last 5 entries): {{ recentHistory }}</p>
    </div>
    <div>
      <h4>Vuex Getter</h4>
      <p>Done ToDos Count: {{ doneTodosCount }}</p>
      <p>Done ToDos: {{ doneTodos.join(', ') }}</p>
    </div>
    <div>
      <h4>Vuex Mutations</h4>
      <button v-on:click="add">+1</button>
      <button v-on:click="min">-1</button><br>
    </div>
    <div>
      <h4>Vuex Actions</h4>
      <button @click="addIfOdd">Add If Odd</button>
      <button @click="addAsync">Add Async</button><br>
      <button @click="addAsyncWithNotify">Add Async And Notify</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Counter02',
  data () {
    return {
      localCount: 5
    }
  },
  computed: {
    textLocalCount () {
      return 'Local Count: ' + String(this.localCount)
    },
    ...mapState({
      count: state => state.count,
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    ...mapGetters([
      'doneTodos',
      'doneTodosCount',
      'recentHistory'
    ])
  },
  methods: {
    ...mapMutations({
      add: 'increment',
      min: 'decrement'
    }),
    ...mapActions({
      addIfOdd: 'incrementIfOdd',
      addAsync: 'incrementAsync',
      addAsyncPromise: 'incrementAsyncPromise'
    }),
    addAsyncWithNotify () {
      this.addAsyncPromise().then(text => alert(text))
    }
  }
}
</script>
