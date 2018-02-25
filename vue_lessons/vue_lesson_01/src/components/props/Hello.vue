<template>
  <div>
    <p>Prop: {{ name }}</p>
    <p v-show="name !== 'null'">Hello {{ getName }}</p>
    <p v-show="query !== 'null'">Query: {{ query }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    name: {
      type: String,
      default: 'null'
    },
    query: {
      type: String,
      default: 'null'
    }
  },
  computed: {
    getName () {
      if (_.isNumber(this.name)) {
        return this.name + '!'
      }
      return _.upperFirst(this.name) + '!'
    }
  }
}
</script>
