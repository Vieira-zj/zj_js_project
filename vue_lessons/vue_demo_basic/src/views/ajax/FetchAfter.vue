<template>
  <div class="post">
    <div class="loading"
         v-if="loading">Loading...</div>
    <div v-if="error"
         class="error">
      {{ error }}
    </div>
    <transition name="slide">
      <!-- giving the post container a unique key triggers transitions 
      when the post id changes. -->
      <div v-if="post"
           class="content"
           :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import common from './Common'

export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据, 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化, 会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      common.sendGetTest('http://mockserver.test.com:8081/mocktest/one/2',
        { file: `post${this.$route.params.id}.json` }, 700)
        .then(resp => {
          this.post = JSON.parse('{' + resp.data.split('{')[1])
        })
        .catch(err => this.error = err.toString())
        .finally(() => (this.loading = false))
    }
  }
}
</script>

<style scoped>
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
}
.error {
  color: red;
}
.content {
  transition: all 0.35s ease;
  position: absolute;
}
.slide-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>