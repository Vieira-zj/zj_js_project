<template>
  <li>
    <div :class="{bold: isFolder}"
         @click="toggle"
         @dblclick="makeFolder">
      {{ item.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-if="isFolder"
        v-show="isOpen">
      <tree-item class="item"
                 v-for="(child, index) in item.children"
                 :key="index"
                 :item="child"
                 @make-folder="$emit('make-folder', $event)"
                 @add-item="$emit('add-item', $event)"></tree-item>
      <li class="add"
          @click="$emit('add-item', item)">+</li>
    </ul>
  </li>
</template>

<script>
import treeItem from './treeItem.vue'

export default {
  name: "treeItem",
  props: {
    // data: name,children status: isFolder,isOpen
    item: Object
  },
  components: {
    treeItem
  },
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder: function () {
      return this.item.children &&
        this.item.children.length
    }
  },
  methods: {
    toggle () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder () {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item)
        this.isOpen = true
      } else {
        alert("make folder failed! it's already a folder.")
      }
    }
  }
}
</script>