<template>
  <div id="component-01">
    <h1>My First Component</h1>
    <span>{{ message1 }}</span>
    <br/>
    <button v-on:click="myEchoMessage">Echo message</button>
    <br/>
    <span>{{ message2 }}</span>
    <br/>
    <button v-on:click="myHttpGet">Send get</button>
  </div>
</template>

<script>
export default {
  name: 'Component01',
  data () {
    return {
      message1: 'My hello world vue.js!',
      message2: 'Send http get request'
    }
  },
  methods: {
    myEchoMessage: function () {
      console.log(this.message1)
    },
    myHttpGet: function () {
      this.$http.get('http://localhost:8080/api/api1').then(response => {
        console.log(response.status)
        this.message2 = response.data
      }).catch(function (err) {
        console.error(err)
      })
    }
  }
}
</script>
