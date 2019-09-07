<template>
  <div id="app1">
    <h1>Vue Lessons</h1>
    <nav>
      <router-link to="/app1/1">lesson-01</router-link> |
      <router-link to="/app1/2">lesson-02</router-link> |
      <router-link to="/app1/3">lesson-03</router-link> |
      <router-link to="/app1/4">lesson-04</router-link>
      <br>
      <router-link to="/app1/5">lesson-05</router-link> |
      <router-link to="/app1/6">lesson-06</router-link> |
      <router-link to="/app1/7">lesson-07</router-link> |
      <router-link to="/app1/8">lesson-08</router-link>
      <br>
      <router-link to="/app1/10?k1=v1&amp;k2=v2">router args test</router-link>
      <br>
    </nav>
    <div v-if="Boolean($route.query)">
      <p>Router parameters: {{ formatParams($route.params) }}</p>
      <p>Router query: {{ formatParams($route.query) }}</p>
    </div>
    <div class="lessons">
      <component v-bind:is="currentLesson"></component>
    </div>
    <div id="trailer">
      <button v-on:click="navTop">Go Top</button><br>
      <router-link to="/">Home</router-link>
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
    currentLesson () {
      let id = this.$route.params.lessonId
      if (id && id < 9) {
        return 'lesson-0' + this.$route.params.lessonId
      }
      return 'lesson-01'
    }
  },
  methods: {
    formatParams: function (params) {
      if (JSON.stringify(params) === '{}') {
        return 'null'
      }
      return params
    },
    navTop: function () {
      // common function in base.js
      this.goTop(this.$)
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.lessons {
  height: 1200px;
}
</style>
