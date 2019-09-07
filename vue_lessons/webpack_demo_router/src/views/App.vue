<template>
  <div id="index">
    <h1>Pages Index</h1>
    <nav>
      <router-link to="/hello">Vue Hello World</router-link><br>
      <router-link to="/mydemo">My Demo</router-link><br>
      <router-link to="/users">Router Demo</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
