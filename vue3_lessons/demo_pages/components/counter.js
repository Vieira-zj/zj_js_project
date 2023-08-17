import { ref, onMounted } from 'vue'

export default {
  props: ['initValue'],
  emits: ['countAdd'],
  setup (props, ctx) {
    onMounted(() => {
      console.log('counter component mounted')
    })

    const count = ref(parseInt(props.initValue))
    function onAdd () {
      count.value++
      ctx.emit('countAdd', count)
    }

    return {
      count,
      onAdd,
    }
  },
  template: `
    <button @click="onAdd">
      You clicked me {{ count }} times
    </button>`,
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
