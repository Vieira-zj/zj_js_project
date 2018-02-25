<template>
  <div id="app4">
    <div id="chart_list">
      <!-- vue-chartjs => http://vue-chartjs.org/#/ -->
      <div class="chart">
        <h2>Line Chart Test</h2>
        <line-chart></line-chart>
      </div>
      <div>
        <h2>Bar Chart Test</h2>
        <bar-chart></bar-chart>
      </div>
      <div>
        <h2>Doughnut Chart Test</h2>
        <doughnut-chart></doughnut-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/charts/BarChart.js'
import LineChart from '@/components/charts/LineChart.js'
import DoughnutChart from '@/components/charts/DoughnutChart.js'

export default {
  name: 'App4',
  components: {
    BarChart,
    LineChart,
    DoughnutChart
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
