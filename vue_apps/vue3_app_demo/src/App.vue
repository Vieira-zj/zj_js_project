<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterView />
    <el-divider />
    <nav id="main-bottom-nav">
      <RouterLink to="/vue">Vue Demo</RouterLink>
      <span> | </span>
      <RouterLink to="/abtest">ABTest Demo</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
#main-bottom-nav {
  text-align: center;
  font-size: 10px;
  margin-bottom: 10px;
}
</style>
