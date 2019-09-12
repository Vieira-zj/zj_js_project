<template>
  <div id="demo">
    <h1>Vue App - SVG 图表</h1>
    <svg width="200"
         height="200">
      <polygraph :stats="stats"></polygraph>
    </svg>
    <!-- controls -->
    <div v-for="(stat, index) in stats"
         :key="index">
      <label>{{stat.label}}</label>
      <input type="range"
             v-model="stat.value"
             min="0"
             max="100">
      <span>{{stat.value}}</span>
      <button @click="remove(stat)"
              class="remove">X</button>
    </div>
    <form id="add">
      <input name="newlabel"
             v-model="newLabel">
      <button @click="add">Add a Stat</button>
    </form>
    <pre id="raw">{{ stats }}</pre>
    <div>
      <p style="font-size:12px">* input[type="range"] requires IE10 or above.</p>
    </div>
  </div>
</template>

<script>
import Polygraph from '@/components/polygraph/Polygraph.vue'

let stats = [
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 }
]

export default {
  components: {
    Polygraph
  },
  data () {
    return {
      newLabel: '',
      stats: stats
    }
  },
  methods: {
    add: function (e) {
      e.preventDefault()
      if (!this.newLabel) return
      this.stats.push({
        label: this.newLabel,
        value: 100
      })
    },
    remove: function (stat) {
      if (this.stats.length > 3) {
        this.stats.splice(this.stats.indexOf(stat), 1)
      } else {
        alert('Can\'t delete more!')
      }
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
}

polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}

text {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 10px;
  fill: #666;
}

label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}

#raw {
  position: absolute;
  top: 0;
  left: 300px;
}
</style>