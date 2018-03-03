<template>
  <div id="app4">
    <div id="chart_list">
      <!-- vue-chartjs => http://vue-chartjs.org/#/ -->
      <h1>ChartJs Lessons</h1>
      <div class="chart">
        <h2>Bar Chart Test</h2>
        <bar-chart></bar-chart>
      </div>
      <div class="chart" v-if="seenReactive">
        <h2>Bar Reactive Chart Test</h2>
        <bar-reactive-chart></bar-reactive-chart>
      </div>
      <div class="chart">
        <h2>Line Chart Test</h2>
        <line-chart></line-chart>
      </div>
      <div class="chart">
        <h2>Doughnut Chart Test</h2>
        <doughnut-chart></doughnut-chart>
      </div>
      <div class="chart">
        <h2>Pie Chart Test</h2>
        <pie-chart></pie-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/charts/BarChart.js'
import BarReactiveChart from '@/components/charts/BarReactiveChart.js'
import LineChart from '@/components/charts/LineChart.js'
import DoughnutChart from '@/components/charts/DoughnutChart.js'
import PieChart from '@/components/charts/PieChart.js'

export default {
  name: 'App4',
  components: {
    BarChart,
    BarReactiveChart,
    LineChart,
    DoughnutChart,
    PieChart
  },
  data () {
    return {
      seenReactive: false
    }
  }
}
</script>

<style scoped>
#app4 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.chart {
  background: #212733;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin:  25px 0;
}
.chart h2 {
  margin-top: 0;
  padding: 15px 0;
  color:  rgba(255, 0,0, 0.5);
  border-bottom: 1px solid #323d54;
}
</style>
