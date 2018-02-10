<template>
  <div id="router-demo01">
    <div>
      <h3>Router Param Demos</h3>
      <p>user id: {{ userid }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterDemo01',
  computed: {
    userid () {
      return this.$route.params.userid
    }
  }
}
</script>
