<template>
  <div>
    <span>Repositories: {{ repositories.join(",") }}</span>
    <br><br><button @click="onClick()">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "UserRepositories",
  methods: {
    onClick () {
      console.log("click me.")
      this.hello()
    }
  }
}
</script>

<script setup>
import { ref, toRefs, onMounted, watch } from "vue"
import { fetchUserRepositories } from "@/utils/mock.js"

// eslint-disable-next-line
const props = defineProps({
  user: {
    type: String,
    required: true,
  },
})

const hello = () => {
  console.log("hello vue3.")
}

const { user } = toRefs(props)

const repositories = ref([])
const getUserRepositories = async () => {
  repositories.value = await fetchUserRepositories(user.value)
}

onMounted(getUserRepositories)

watch(user, getUserRepositories)

// eslint-disable-next-line
defineExpose({
  hello,
  repositories,
})
</script>
