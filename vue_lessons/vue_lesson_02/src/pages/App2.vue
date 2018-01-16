<template>
  <div id="app2">
    <lesson-one></lesson-one>
  </div>
</template>

<script>
import LessonOne from '@/components/LessonOne'

export default {
  name: 'App2',
  components: {
    LessonOne
  }
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
