import { Bar, mixins } from 'vue-chartjs'
const { reactiveData } = mixins

export default {
  extends: Bar,
  mixins: [reactiveData],
  data () {
    return {
      chartData: null,
      gradient: null
    }
  },
  created () {
    console.info('hook: bar reactive chart created.')
    this.fillData()
  },
  mounted () {
    console.info('hook: bar reactive chart mounted.')
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)') // show this color at 0%
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)') // show this color at 50%
    this.gradient.addColorStop(1, 'rgba(145, 67, 204, 0.46)') // show this color at 100%

    this.renderChart(this.chartData, { responsive: true, maintainAspectRatio: false })

    setInterval(() => { this.fillData() }, 5000)
  },
  methods: {
    fillData () {
      this.chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: this.gradient,
            data: (() => {
              let nums = []
              for (let idx = 0; idx < 12; idx++) {
                nums.push(this.getRandomInt())
              }
              return nums
            })()
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * 50)
    }
  }
}
