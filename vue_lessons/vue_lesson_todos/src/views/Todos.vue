<template>
  <div id="app-todos">
    <div>
      <h2>My Todo App!</h2>
      <TodoList />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoList from '@/components/todos/TodoList.vue'

export default {
  components: {
    TodoList
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app-todos {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $vue-blue;
}

h1 {
  text-align: center;
}
</style>