<template>
  <!-- unit-jest demo -->
  <div id="app"
       class="content">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello!' // #1
    }
  },
  created () {
    this.msg = 'bye!' // #2
  }
}
</script>

<style src="@/css/content.css" scoped></style>