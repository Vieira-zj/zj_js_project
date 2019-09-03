<template>
  <div id="app">
    <!-- unit-jest demo -->
    <h1 style="text-align: center">{{ msg }}</h1>
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
