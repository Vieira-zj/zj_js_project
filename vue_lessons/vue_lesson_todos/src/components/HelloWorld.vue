<template>
  <div id="app">
    <h1>unit-jest demo</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello!'
    }
  },
  created () {
    this.msg = 'bye!'
  }
}
</script>