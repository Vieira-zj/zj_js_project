<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <label for="user">User</label>
      <input id="user"
             type="text"
             v-model="user">
      <UserRepo :user="user" />
    </div>
  </div>
</template>

<script>
import UserRepo from "@/components/UserRepositories.vue"

export default {
  name: "About",
  components: {
    UserRepo,
  },
  data () {
    return {
      user: "js_dev",
    }
  }
}
</script>

<style scoped>
#user {
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>
