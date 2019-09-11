<template>
  <!-- svg <g> group -->
  <g>
    <!-- svg <polygon> 创建含有不少于三个边的图形 -->
    <polygon :points="points"></polygon>
    <!-- svg <circle> 创建一个圆 cx 和 cy 属性定义圆点的 x 和 y 坐标 -->
    <circle cx="100"
            cy="100"
            r="80"></circle>
    <axis-label v-for="(stat, index) in stats"
                :stat="stat"
                :index="index"
                :key="index"
                :total="stats.length">
    </axis-label>
  </g>
</template>

<script>
import Common from './Common'
import AxisLabel from './AxisLabel.vue'

export default {
  components: {
    AxisLabel
  },
  props: ['stats'],
  computed: {
    points: function () {
      let total = this.stats.length
      return this.stats.map(function (stat, i) {
        let point = Common.valueToPoint(stat.value, i, total)
        return point.x + ',' + point.y
      }).join(' ')
    }
  }
}
</script>