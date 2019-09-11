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
import treeData from './treeData.js'

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

<style lang="scss">
// Node: if style is defined as "scoped",
// the css will not be applied to included component "treeitem".
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
</style>