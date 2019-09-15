<template>
  <div id="app">
    <h1>Vue Demo - Router</h1>
    <div>
      <router-link to="/home">Home</router-link> |
      <router-link to="/index">Index</router-link> |
      <router-link to="/hello">Vue Hello World</router-link> |
      <router-link to="/mydemo">My Demo</router-link> |
      <router-link to="/users">Router Demo</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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
