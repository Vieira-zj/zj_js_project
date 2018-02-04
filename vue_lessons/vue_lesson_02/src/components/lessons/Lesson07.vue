<template>
  <div id="lesson-07">
    <h1>Lesson 07</h1>
    <div id="example-dom">
      <p>set font color for DOM object</p>
      <button v-on:click="setFontColor()">set color</button>
    </div>
    <!-- TODO: CH9 -->
  </div>
</template>

<script>
export default {
  name: 'Lesson07',
  methods: {
    setFontColor: function () {
      document.querySelector('#example-dom').style.color = 'green'
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
