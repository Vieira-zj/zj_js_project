<template>
  <div id="router-demo01">
    <div>
      <h3>Router Demo 01</h3>
      <p>ID: {{ routerId }}</p>
      <p>ID stat: <span>{{ statMsg }}</span></p>
      <p>navigation: {{ navMsg }}</p>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterDemo01',
  data () {
    return {
      statMsg: 'none',
      navMsg: 'none'
    }
  },
  computed: {
    routerId () {
      return this.$route.params.id
    }
  },
  watch: {
    '$route' (to, from) {
      this.statMsg = 'ID is reload'
      this.navMsg = 'from ' + from.path + ' to ' + to.path
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
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
</style>
