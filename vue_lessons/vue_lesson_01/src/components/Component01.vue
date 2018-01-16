<template>
  <div id="component-01">
    <h1>My First Component</h1>
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'Component01',
  data () {
    return {
      message: 'My hello world vue.js!'
    }
  }
}
</script>
