<template>
  <div id="app1">
    <h1>Vue Lessons</h1>
    <nav>
      <router-link to="/app1/1">lesson-01,</router-link>
      <router-link to="/app1/2">lesson-02,</router-link>
      <router-link to="/app1/3">lesson-03</router-link>
      <br>
      <router-link to="/app1/4">lesson-04,</router-link>
      <router-link to="/app1/5">lesson-05,</router-link>
      <router-link to="/app1/6">lesson-06</router-link>
      <br>
      <router-link to="/app1/7">lesson-07,</router-link>
      <router-link to="/app1/8">lesson-08</router-link>
    </nav>
    <div>
      <lesson-01 v-if="dynamicSegment === '1'"></lesson-01>
      <lesson-02 v-if="dynamicSegment === '2'"></lesson-02>
      <lesson-03 v-if="dynamicSegment === '3'"></lesson-03>
      <lesson-04 v-if="dynamicSegment === '4'"></lesson-04>
      <lesson-05 v-if="dynamicSegment === '5'"></lesson-05>
      <lesson-06 v-if="dynamicSegment === '6'"></lesson-06>
      <lesson-07 v-if="dynamicSegment === '7'"></lesson-07>
      <lesson-08 v-if="dynamicSegment === '8'"></lesson-08>
    </div>
  </div>
</template>

<script>
import Lesson01 from '@/components/lessons/Lesson01'
import Lesson02 from '@/components/lessons/Lesson02'
import Lesson03 from '@/components/lessons/Lesson03'
import Lesson04 from '@/components/lessons/Lesson04'
import Lesson05 from '@/components/lessons/Lesson05'
import Lesson06 from '@/components/lessons/Lesson06'
import Lesson07 from '@/components/lessons/Lesson07'
import Lesson08 from '@/components/lessons/Lesson08'

export default {
  name: 'App1',
  components: {
    Lesson01,
    Lesson02,
    Lesson03,
    Lesson04,
    Lesson05,
    Lesson06,
    Lesson07,
    Lesson08
  },
  computed: {
    dynamicSegment: function () {
      return this.$route.params.lessonId
    }
  }
}
</script>

<style scoped>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
