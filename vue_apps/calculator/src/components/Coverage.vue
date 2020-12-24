<template>
  <div>
    <button id="upload" v-if="isTest" @click="uploadCoverage">
      Upload Coverage
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      isTest: process.env.NODE_ENV === 'test',
    }
  },
  methods: {
    uploadCoverage() {
      if (!window.__coverage__) {
        return
      }

      axios({
        method: 'POST',
        url: 'http://localhost:9090/coverage/client',
        data: window.__coverage__,
        headers: {
          'Content-type': 'application/json',
        },
      }).then(
        (resp) => {
          console.log('post coverage:', resp)
        },
        (err) => {
          console.error('post coverage failed:', err)
        }
      )
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
  margin: 20% auto;
}

#upload {
  font-size: 20px;
  background: hsl(0, 0%, 70%);
  background: linear-gradient(15deg, hsl(0, 0%, 60%) 0%, hsl(0, 0%, 70%) 100%);
  border: 1px solid #111;
  cursor: pointer;
  padding: 10px;
  margin-top: 20px;
}
</style>
