<template>
  <div id="app">
    <img src="@/assets/logo.png">
    <hello-world></hello-world>
    <h2>Link List</h2>
    <nav>
      <ul>
        <li>
          <router-link to="/app2">App2</router-link><br>
          <router-link to="/app2/1">lesson-01,</router-link>
          <router-link to="/app2/2">lesson-02,</router-link>
          <router-link to="/app2/3">lesson-03</router-link>
          <br>
          <router-link to="/app2/4">lesson-04,</router-link>
          <router-link to="/app2/5">lesson-05,</router-link>
          <router-link to="/app2/6">lesson-06</router-link>
          <br>
          <router-link to="/app2/7">lesson-07</router-link>
        </li>
        <li>
          <router-link to="/app3">App3</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
</style>
