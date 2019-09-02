<template>
  <div>
    <div>
      <h2>Router Props</h2>
      <router-link to="/router/props">home</router-link> |
      <router-link to="/router/props/hello/you">hello you</router-link> |
      <router-link to="/router/props/static">static</router-link> |
      <router-link to="/router/props/dynamic/1">dynamic</router-link>
    </div>
    <router-view foo="123"></router-view>
  </div>
</template>
