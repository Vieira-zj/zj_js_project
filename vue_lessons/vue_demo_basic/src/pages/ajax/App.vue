<template>
  <div id="app"
       class="content">
    <h1>Data Fetching</h1>
    <div>
      <router-link to="/">Home</router-link><br>
    </div>
    <div>
      <h2>Post Before</h2>
      <router-link to="/postbefore/1">Post 1</router-link> |
      <router-link to="/postbefore/2">Post 2</router-link> |
      <router-link to="/postbefore/3">Post 3</router-link>
    </div>
    <div>
      <h2>Post After</h2>
      <router-link to="/postafter/1">Post 1</router-link> |
      <router-link to="/postafter/2">Post 2</router-link> |
      <router-link to="/postafter/3">Post 3</router-link>
    </div>
    <router-view class="view" />
  </div>
</template>

<style scoped>
@import '../../css/content.css';
</style>