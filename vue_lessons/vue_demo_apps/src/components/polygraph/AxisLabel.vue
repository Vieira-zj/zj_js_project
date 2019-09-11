<template>
  <!-- svg <text> 定义文本 -->
  <text :x="point.x"
        :y="point.y">{{stat.label}}</text>
</template>

<script>
import Common from './Common'

export default {
  props: {
    stat: Object,
    index: Number,
    total: Number
  },
  computed: {
    point: function () {
      return Common.valueToPoint(
        +this.stat.value + 10,
        this.index,
        this.total
      )
    }
  }
}
</script>