<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['select-project'])

const project = reactive({
  selected: '',
  options: ['mpcheckout-core', 'mpcreate-checkout', 'shark-demo'],
})

function onSelectProject () {
  console.log('onSelectProject')
  emit('select-project', project.selected)
}
function onClickAddNewProject () {
  console.log('onClickAddNewProject')
}
function onClickOpenDoc () {
  console.log('onClickOpenDoc')
}
</script>

<template>
  <div>
    <el-button type="primary" plain icon="Document" style="margin-right: 10px" @click="onClickOpenDoc">
      使用说明
    </el-button>
    <span style="color: #606266; font-size: 14px">所属项目：</span>
    <el-select filterable clearable placeholder="请选择" @change="onSelectProject" v-model="project.selected">
      <el-option v-for="item of project.options" :key="item" :label="item" :value="item">
      </el-option>
    </el-select>
    <el-button @click="onClickAddNewProject" style="margin-left: 10px">应用接入</el-button>
  </div>

  <!-- todo: add project dialog -->
</template>
