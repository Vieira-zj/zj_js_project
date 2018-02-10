<template>
  <div id="vue-demo">
    <div>
      <h3>Alert test</h3>
      <button v-on:click="myEchoMessage">Echo Message</button><br>
      <span>{{ message1 }}</span>
    </div>
    <div>
      <h3>Http test</h3>
      <button v-on:click="myHttpGet">Get Request</button><br>
      <span>{{ message2 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueDemo',
  data () {
    return {
      message1: 'My hello world vue.js!',
      message2: 'http Get test'
    }
  },
  methods: {
    myEchoMessage: function () {
      alert(this.message1)
    },
    myHttpGet: function () {
      this.$http.get('http://localhost:8080/api/api1')
        .then(response => {
          console.log(response.status)
          this.message2 = response.data
        })
        .catch(function (err) {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>
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
