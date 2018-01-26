<template>
  <div id="lesson-03">
    <h1>Lesson 03</h1>
    <div id="example-01" v-if="seen1">
      <h2>Example 01: computed properties</h2>
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <div id="example-02" v-if="seen2">
      <h2>Example 02: watch vs computed</h2>
      <div id="watch-property">
        <h3>watch property</h3>
        <div>
          <label for="first-name">first name</label>
          <input id="first-name" type="text" v-model="firstName"><br>
          <label for="last-name">last name</label>
          <input id="last-name" type="text" v-model="lastName">
        </div>
        <p>{{ fullName }}</p>
      </div>
      <div id="computed-property">
        <h3>computed property</h3>
        <div>
          <input type="text" v-model="firstName1" placeholder="first name"><br>
          <input type="text" v-model="lastName1" placeholder="last name">
        </div>
        <p>{{ fullName1 }}</p>
      </div>
    </div>
    <div id="example-03" v-if="seen3">
      <h2>Example 03: watch property</h2>
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
export default {
  name: 'Lesson03',
  data() {
    return {
      seen1: false,
      message: 'Hello',
      seen2: true,
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      firstName1: 'Foo',
      lastName1: 'Bar',
      seen3: true,
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      this.$http
        .get('https://yesno.wtf/api')
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function(error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  },
  computed: {
    // field for cached value
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    fullName1: function() {
      return this.firstName1 + ' ' + this.lastName1
    }
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function(val) {
      this.fullName = this.firstName + ' ' + val
    },
    question: function(newQuestion, oldQuestion) {
      if (newQuestion === '') {
        this.answer = 'I cannot give you an answer until you ask a question!'
        return
      }
      this.answer = 'Waiting for you to stop typing...'
      setTimeout(this.getAnswer, 2000)
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
