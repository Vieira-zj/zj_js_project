<script setup>
import { ref } from 'vue'

defineProps(['title'])
defineEmits(['enlarge-text'])

const count = ref(0)
</script>

<template>
  <div>
    <h4>{{ title }}</h4>
    <button @click="count++">You clicked me {{ count }} times.</button><br />
    <button @click="$emit('enlarge-text')">Enlarge text</button>
    <p>
      <slot />
    </p>
  </div>
</template>
