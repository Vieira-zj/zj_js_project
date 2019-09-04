<template>
  <div>
    <p class="hello">Hello {{ name }} {{ $attrs }}</p>
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