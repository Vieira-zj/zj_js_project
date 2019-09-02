<template>
  <div id="app-todos">
    <div>
      <h2>My Todo App!</h2>
      <TodoList />
    </div>
    <div>
      <h2>Route props</h2>
      <router-link to="/">home</router-link> |
      <router-link to="/hello/you">hello you</router-link> |
      <router-link to="/static">static</router-link> |
      <router-link to="/dynamic/1">dynamic</router-link>
      <router-view foo="123"></router-view>
    </div>
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

<style lang="scss">
@import './variables.scss';

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