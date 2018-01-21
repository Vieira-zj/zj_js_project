<template>
  <div id="lesson-05">
    <h1>Lesson 05</h1>
    <div id="example 01" v-if="seen1">
      <h2>Example 01: v-if and v-else</h2>
      <div v-if="Math.random() > 0.5">Now you see me</div>
      <div v-else>Now you don't</div>
    </div>
    <div id="example 02" v-if="seen2">
      <h2>Example 02: v-show</h2>
      <p v-show="ok">v-show only toggles the display CSS property of the element.</p>
    </div>
    <div id="example 03" v-if="seen3">
      <h2>Example 03: list render</h2>
      <ul>
        <li v-for="(item, index) in items" v-bind:key="index">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
      </ul>
    </div>
    <div id="example 04" v-if="seen4">
      <h2>Example 04: v-for an object</h2>
      <ul>
        <li v-for="(v, k) in object" v-bind:key="k">
          {{ k }} : {{ v }}
        </li>
      </ul>
    </div>
    <div id="example 05" v-if="seen5">
      <h2>Example 05, display filter results</h2>
      <div id="computed-property">
        <ul>
          <li v-for="(n, idx) in evenNumbers" v-bind:key="idx">
            {{ n }}
          </li>
        </ul>
      </div>
      <div id="bind-method">
        <ul>
          <li v-for="(n, idx) in notEven(numbers)" v-bind:key="idx">
            {{ n }}
          </li>
        </ul>
      </div>
    </div>
    <div id="example 06" v-if="seen6">
      <h2>Example 06, v-for with v-if</h2>
      <ul v-if="todos.length">
        <li v-for="(todo, idx) in todos" v-if="todo.isComplete" v-bind:key="idx">
          {{ todo.lang }} completed
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lesson05',
  data () {
    return {
      seen1: true,
      seen2: true,
      ok: true,
      seen3: true,
      parentMessage: 'Parent',
      items: [
        {message: 'Foo'},
        {message: 'Bar'}
      ],
      seen4: true,
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      seen5: false,
      numbers: [ 1, 2, 3, 4, 5 ],
      seen6: true,
      todos: [
        {lang: 'Java', isComplete: true},
        {lang: 'JavaScript', isComplete: false},
        {lang: 'Python', isComplete: true},
        {lang: 'Golang', isComplete: false}
      ]
    }
  },
  methods: {
    notEven: function () {
      return this.numbers.filter((number) => number % 2 !== 0)
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
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
