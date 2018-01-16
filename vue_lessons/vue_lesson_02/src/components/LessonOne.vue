<template>
<div id="lesson-01">
  <h1>Lesson 01</h1>
  <div id="example-01" v-if="seen1">
    <h2>Example 01, bind text</h2>
    <p>{{ message1 }}</p>
  </div>
  <div id="example-02" v-if="seen2">
    <h2>Example 02, bind attribute</h2>
    <span v-bind:title="message2">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
  </div>
  <div id="example-03" v-if="seen3">
    <h2>Example 03, v-for loop</h2>
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.index">
        {{ todo.text }}
      </li>
    </ol>
  </div>
  <div id="example-04" v-if="seen4">
    <h2>Example 04, bind method</h2>
    <p>{{ message4 }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
  <div id="example-05" v-if="seen5">
    <h2>Example 05, two-way bind</h2>
    <p>{{ message5 }}</p>
    <input type="text" v-model="message5">
  </div>
  <div id="example-06" v-if="seen6">
    <h2>Example 06, custom component</h2>
    <ul>
      <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.key">
      </todo-item>
    </ul>
  </div>
</div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'Lesson01',
  data () {
    return {
      seen1: true,
      message1: 'Vieira vue lessons.',
      seen2: false,
      message2: 'You loaded this page on ' + new Date().toLocaleString(),
      seen3: false,
      todos: [
        { index: 1, text: 'Learn JavaScript' },
        { index: 2, text: 'Learn Vue' },
        { index: 3, text: 'Build something awesome' }
      ],
      seen4: false,
      message4: 'Hello Vue.js!',
      seen5: true,
      message5: 'Hello Vue!',
      seen6: true,
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else' }
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message4 = this.message4.split('').reverse().join('')
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
