<template>
  <div class="post">
    <div v-if="error"
         class="error">
      {{ error }}
    </div>
    <transition name="slide">
      <!-- giving the post container a unique key triggers transitions 
      when the post id changes. -->
      <div v-if="post"
           class="resp_content"
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
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    common.sendGet('http://mockserver.test.com:8081/mocktest/one/2',
      { file: `post${to.params.id}.json` })
      .then(resp => {
        let data = JSON.parse('{' + resp.data.split('{')[1])
        next(vm => vm.setData(null, data))
      })
      .catch(err => {
        next(vm => vm.setData(err, null))
      })
  },
  // 路由改变前, 组件就已经渲染完了, 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    this.post = null
    common.sendGet('http://mockserver.test.com:8081/mocktest/one/2',
      { file: `post${to.params.id}.json` })
      .then(resp => {
        let data = JSON.parse('{' + resp.data.split('{')[1])
        this.setData(null, data)
        next()
      })
      .catch(err => {
        this.setData(err, null)
        next()
      })
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
.resp_content {
  transition: all 0.35s ease;
  position: absolute;
  left: 350px;
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