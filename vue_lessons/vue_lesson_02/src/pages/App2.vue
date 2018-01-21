<template>
  <div id="app2">
    <lesson-01 v-if="seen1"></lesson-01>
    <lesson-02 v-if="seen2"></lesson-02>
    <lesson-03 v-if="seen3"></lesson-03>
  </div>
</template>

<script>
import Lesson01 from '@/components/Lesson01'
import Lesson02 from '@/components/Lesson02'
import Lesson03 from '@/components/Lesson03'

export default {
  name: 'App2',
  data () {
    return {
      seen1: false,
      seen2: false,
      seen3: true
    }
  },
  components: {
    Lesson01,
    Lesson02,
    Lesson03
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
