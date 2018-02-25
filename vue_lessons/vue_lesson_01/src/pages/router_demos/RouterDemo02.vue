<template>
  <div id="router-demo02">
    <h3>Router Demo 02, Props</h3>
    <ul>
      <li><router-link to="/props/params/zhengjin">Hello Name</router-link></li>
      <li><router-link to="/props/static">Hello World</router-link></li>
      <li><router-link to="/props/dynamic/1">Hello Dynamic</router-link></li>
      <li><router-link to="/props/search?q=vue">Hello Attrs</router-link></li>
    </ul>
    <router-view/>
    <a v-on:click="goRouterHome">Router Home</a>
  </div>
</template>

<script>
export default {
  methods: {
    goRouterHome () {
      this.$router.push({ name: 'user_home' })
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
