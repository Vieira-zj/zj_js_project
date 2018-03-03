<template>
  <div id="app2">
    <h1>Vuex Lessons</h1>
    <div v-show="seen1">
      <counter-01></counter-01>
    </div>
    <div v-show="seen2">
      <counter-02></counter-02>
    </div>
    <div v-show="seen3">
      <counter-03></counter-03>
    </div>
  </div>
</template>

<script>
import Counter01 from '@/components/counter/Counter01'
import Counter02 from '@/components/counter/Counter02'
import Counter03 from '@/components/counter/Counter03'

export default {
  name: 'App2',
  data () {
    return {
      seen1: true,
      seen2: false,
      seen3: false
    }
  },
  components: {
    Counter01,
    Counter02,
    Counter03
  }
}
</script>

<style scoped>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
