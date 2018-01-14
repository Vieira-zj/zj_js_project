<template>
<div id="lesson-01">
  <div id="example-01" v-if="seen1">
    <h1>Example 01, bind text</h1>
    <p>{{ message1 }}</p>
  </div>
  <div id="example-02" v-if="seen2">
    <h1>Example 02, bind attribute</h1>
    <span v-bind:title="message2">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
  </div>
  <div id="example-03" v-if="seen3">
    <h1>Example 03, v-if statement</h1>
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.index">
        {{ todo.text }}
      </li>
    </ol>
  </div>
  <div id="example-04" v-if="seen4">
    <h1>Example 04, bind method</h1>
    <p>{{ message4 }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
  <div id="example-05" v-if="seen5">
    <h1>Example 05, two-way bind</h1>
    <p>{{ message5 }}</p>
    <input type="text" v-model="message5">
  </div>
</div>
</template>

<script>
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
      message5: 'Hello Vue!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.message4 = this.message4.split('').reverse().join('')
    }
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
