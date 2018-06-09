import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

// use "reactiveProp" alone with "chartData", it watchs the changes of props=>chartData
export default {
  extends: Line,
  name: 'line2',
  mixins: [reactiveProp],
  props: ['chartData', 'options'], // properties from html tag
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    console.info('vue hook: line reactive chart mounted.')

    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')

    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

    this.chartData.datasets[0].backgroundColor = this.gradient
    this.chartData.datasets[1].backgroundColor = this.gradient2

    // chartData and options are in "props" from page script (App5.vue)
    this.renderChart(this.chartData, this.options)
  }
}
