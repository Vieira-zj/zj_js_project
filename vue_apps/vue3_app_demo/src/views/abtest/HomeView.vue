<script setup>
import { reactive, ref } from 'vue'
import { RouterView } from 'vue-router'

import ABTestHeader from '../../components/ABTestHeader.vue'
import ABTestAside from '../../components/ABTestAside.vue'

const fullscreenLoading = ref(false)
const app = reactive({
  selected: '',
})

function onSelectApp (value) {
  console.log('selected application:', value)
  app.selected = value
}
</script>

<template>
  <div>
    <el-container v-loading.fullscreen.lock="fullscreenLoading">
      <el-aside style="width: 200px">
        <ABTestAside />
      </el-aside>

      <el-container>
        <el-header>
          <div style="float: right; margin-top: 15px">
            <ABTestHeader @select-app="onSelectApp" />
          </div>
        </el-header>
        <el-divider></el-divider>

        <el-main>
          <h3 v-show="app.selected.length === 0" class="main-header">
            请选择特定的项目
          </h3>
          <div style="width: 80%; margin: auto" v-show="app.selected.length > 0">
            <RouterView />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.main-header {
  color: #606266;
  text-align: center;
}
</style>
