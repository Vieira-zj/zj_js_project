<template>
  <div>
    <h3 class="hello">Hello {{name}} {{ $attrs }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Vue!'
    }
  }
}
</script>