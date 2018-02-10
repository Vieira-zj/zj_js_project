<template>
  <div id="router-index">
    <h1>Router Demos</h1>
    <nav>
      <router-link to="/router/foo">Foo</router-link><br>
      <router-link to="/router/bar">Bar</router-link><br>
      <router-link to="/router/001">Userid 001</router-link><br>
      <router-link to="/router/002">Userid 002</router-link>
    </nav>
    <router-view/>
    <p>
      <a v-on:click="goBack">Go Back</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'RouterIndex',
  methods: {
    goBack () {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
