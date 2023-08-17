let Updater = {
  props: {
    text: String,
  },
  methods: {
    onSend () {
      if (this.text) {
        this.$emit('update:text', this.text)
      }
    },
  },
  template: `
  <div>
    <p>v-bind修饰符sync: <slot name="desc"></slot></p>
    <input v-model="text" placeholder="Please input" />
    <button @click="onSend">Update</button>
  </div>`,
}
