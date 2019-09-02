<template>
  <div class="content">
    <h1 style="text-align: center">My Home</h1>
    <div>
      <router-link to="/todos">Todos</router-link> |
      <router-link to="/router/namedview">Nested Named View</router-link> |
      <router-link to="/router/props">Passing Props to Route Components</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
h2 {
  text-align: center;
}

.content {
  max-width: 500px;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
