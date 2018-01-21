<template>
  <div id="app2">
    <lesson-one v-if="seen1"></lesson-one>
    <lesson-two v-if="seen2"></lesson-two>
  </div>
</template>

<script>
import LessonOne from '@/components/LessonOne'
import LessonTwo from '@/components/LessonTwo'

export default {
  name: 'App2',
  data () {
    return {
      seen1: false,
      seen2: true
    }
  },
  components: {
    LessonOne,
    LessonTwo
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
