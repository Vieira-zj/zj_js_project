<template>
  <div id="app2">
    <lesson-01 v-if="seen1"></lesson-01>
    <lesson-02 v-if="seen2"></lesson-02>
    <lesson-03 v-if="seen3"></lesson-03>
    <lesson-04 v-if="seen4"></lesson-04>
    <lesson-05 v-if="seen5"></lesson-05>
  </div>
</template>

<script>
import Lesson01 from '@/components/Lesson01'
import Lesson02 from '@/components/Lesson02'
import Lesson03 from '@/components/Lesson03'
import Lesson04 from '@/components/Lesson04'
import Lesson05 from '@/components/Lesson05'

export default {
  name: 'App2',
  data () {
    return {
      seen1: false,
      seen2: false,
      seen3: false,
      seen4: false,
      seen5: true
    }
  },
  components: {
    Lesson01,
    Lesson02,
    Lesson03,
    Lesson04,
    Lesson05
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
