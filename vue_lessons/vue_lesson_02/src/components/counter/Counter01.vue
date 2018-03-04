<template>
  <div id="counter01">
    <h3>Vuex Lesson 01</h3>
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
export default {
  name: 'Counter01',
  data () {
    return {
      localCount: 5
    }
  },
  computed: {
    // vuex state
    textLocalCount () {
      return 'Local Count: ' + String(this.localCount)
    },
    count () {
      return this.$store.state.count
    },
    countPlusLocalState (state) {
      return this.$store.state.count + this.localCount
    },
    // vuex getters
    doneTodos () {
      return this.$store.getters.doneTodos
    },
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    },
    recentHistory () {
      return this.$store.getters.recentHistory
    }
  },
  methods: {
    // vuex mutations
    add () {
      this.$store.commit('increment')
    },
    min () {
      this.$store.commit('decrement')
    },
    // vuex actions
    addIfOdd () {
      this.$store.dispatch('incrementIfOdd')
    },
    addAsync () {
      this.$store.dispatch('incrementAsync')
    },
    addAsyncWithNotify () {
      this.$store.dispatch('incrementAsyncPromise').then((text) => alert(text))
    }
  }
}
</script>
