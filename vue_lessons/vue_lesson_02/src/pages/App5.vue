<template>
  <div id="app5">
    <div>
      <!-- vue-chartjs => http://vue-chartjs.org/#/ -->
      <h1>ChartJs Lessons - Reactive</h1>
      <div class="chart" v-if="seenReactiveBar">
        <h2>Bar Reactive Chart Test</h2>
        <bar-reactive></bar-reactive>
      </div>
      <div class="chart" v-if="seenReactiveLine">
        <h2>Line Reactive Chart Test</h2>
        <!-- error: use tag line-reactive-chart? -->
        <!-- TODO: get canvas context -->
        <line-reactive :chart-data="datacollection" :options="chartOptions"></line-reactive>
      </div>
      <button @click="fillData()">Randomize</button>
    </div>
  </div>
</template>

<script>
import BarReactive from '@/components/charts/BarReactiveChart'
import LineReactive from '@/components/charts/LineReactiveChart'

export default {
  name: 'App5',
  components: {
    BarReactive,
    LineReactive
  },
  data () {
    return {
      seenReactiveBar: false,
      seenReactiveLine: true,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      datacollection: null
    }
  },
  mounted () {
    console.info('vue hook: virtual dom mounted.')
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            data: this.getRandomCollection(7)
          },
          {
            label: 'Data Two',
            backgroundColor: 'rgba(0, 231, 255, 0.5)',
            data: this.getRandomCollection(7)
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    getRandomCollection (count) {
      let collection = []
      for (let idx = 0; idx < count; idx++) {
        collection.push(this.getRandomInt())
      }
      return collection
    }
  }
}
</script>

<style scoped>
#app5 {
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
