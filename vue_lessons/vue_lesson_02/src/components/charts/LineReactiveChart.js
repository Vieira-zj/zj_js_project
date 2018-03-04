import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  name: 'line2',
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    console.info('hook: line reactive chart mounted in js.')
    // this.chartData is created in the mixin.
    this.renderChart(this.chartData, this.options)
  }
}