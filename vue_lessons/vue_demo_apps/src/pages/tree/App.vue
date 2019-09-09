<template>
  <div id="demo">
    <h1>Tree - 组件递归使用</h1>
    <p>(You can double click on an item to turn it into a folder.)</p>
    <ul>
      <tree-item class="item"
                 :item="treeData"
                 @make-folder="makeFolder"
                 @add-item="addItem">
      </tree-item>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import treeItem from '@/components/tree/treeItem.vue'

let treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

export default {
  components: {
    treeItem
  },
  data () {
    return {
      treeData
    }
  },
  methods: {
    makeFolder: function (item) {
      Vue.set(item, 'children', [])
      this.addItem(item)
    },
    addItem: function (item) {
      item.children.push({
        name: 'new stuff'
      })
    },
  }
}
</script>

<style lang="scss" scoped>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>