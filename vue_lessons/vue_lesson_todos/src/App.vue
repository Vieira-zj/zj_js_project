<template>
  <div>
    <h2>My Home</h2>
    <div>
      <router-link to="/todos">Todos</router-link> |
      <router-link to="/router/named">Nested Named View</router-link> |
      <router-link to="/router/props">Passing Props to Route Components</router-link>
      <router-view />
    </div>
  </div>
</template>
