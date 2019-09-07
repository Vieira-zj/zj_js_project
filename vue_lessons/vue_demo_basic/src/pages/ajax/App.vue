<template>
  <div id="app"
       class="content">
    <h1>Data Fetching</h1>
    <router-link to="/">Home</router-link><br>
    <router-link to="/postbefore/1">Post Before 1</router-link> |
    <router-link to="/postbefore/2">Post Before 2</router-link> |
    <router-link to="/postbefore/3">Post Before 3</router-link><br>
    <router-link to="/postafter/1">Post After 1</router-link> |
    <router-link to="/postafter/2">Post After 2</router-link> |
    <router-link to="/postafter/3">Post After 3</router-link>
    <router-view class="view"></router-view>
  </div>
</template>

<style>
@import '../../css/content.css';
</style>