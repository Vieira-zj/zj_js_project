<template>
  <div id="app1">
    <img src="@/assets/logo.png">
    <hello-world></hello-world>
    <div>
      <h1>Navigation</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/app1">App1 vue lessons</router-link>
          </li>
          <li>
            <router-link to="/app2">App2 vuex lessons</router-link>
          </li>
          <li>
            <router-link to="/app3">App3 iframe</router-link>
          </li>
          <li>
            <router-link to="/app4">App4 charts</router-link>
          </li>
          <li>
            <router-link to="/app5">App5 reactive charts</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App1',
  components: {
    HelloWorld
  }
}
</script>
