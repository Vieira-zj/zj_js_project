<template>
  <div id="app"
       class="content">
    <!-- unit-jest demo -->
    <h1>{{ msg }}</h1>
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

<style src="@/css/content.css" scoped></style>