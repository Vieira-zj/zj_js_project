<template>
  <div class="content">
    <h1>Vue App - 模式组件</h1>
    <p>组件，prop 传递，内容插入 (content insertion)，过渡 (transitions)</p>
    <button id="show-modal"
            @click="showModal = true">Show Modal</button>
    <modal v-if="showModal"
           @close="showModal = false">
      <h3 slot="header">Custom Header</h3>
      <h3 slot="body">This is a custom message.</h3>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/modal/Modal.vue'

export default {
  components: {
    Modal
  },
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="scss" scoped>
// Note: if style is defined as "scoped", the css will not apply to component "modal".
h1 {
  text-align: center;
}

.content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
}
</style>