<template>
  <div id="router-demo02">
    <h3>Router Demo 02, Props</h3>
    <div>
      <label for="inputname">Input Name:</label>
      <input id="inputname"
             type="text"
             v-model.lazy="inputName"><br>
      <label for="inputnext">Input Next:</label>
      <input id="inputnext"
             type="text"
             v-model.lazy="inputNext">
    </div>
    <div>
      <ul>
        <li>
          <router-link to="/props/args">Hello World</router-link>
        </li>
        <li>
          <button @click="goHelloName"
                  v-bind:title="message">Hello Name</button>
        </li>
        <li>
          <button @click="goNextYears"
                  v-bind:title="message">Next Years</button>
        </li>
        <li>
          <router-link to="/props/search?key=vue">Query Test</router-link>
        </li>
      </ul>
    </div>
    <div>
      <!-- component: Hello -->
      <router-view />
    </div>
    <div>
      <button v-on:click="goRouterHome">Router Home</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputName: 'null',
      inputNext: 0,
      message: 'Click me'
    }
  },
  methods: {
    goHelloName () {
      // as <router-link to="xxx">, navigate and add a history
      this.$router.push('/props/args/' + this.inputName)
    },
    goNextYears () {
      this.$router.push('/props/custom/' + this.inputNext)
    },
    goRouterHome () {
      this.$router.push({ name: 'user_home' })
    }
  }
}
</script>
