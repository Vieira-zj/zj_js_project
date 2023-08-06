<script setup>
import { getScreenHeight } from '../assets/utils.js'
import { ref } from 'vue'

const activemenu = ref("1")

function onClickRunLink () {
  activemenu.value = "1"
}
function onClickResultLink () {
  activemenu.value = "2"
}
</script>

<template>
  <div>
    <el-menu :default-active="activemenu" :style="{ height: getScreenHeight() + 'px' }">
      <el-menu-item index="1">
        <el-icon>
          <VideoPlay />
        </el-icon>
        <RouterLink to="/abtest/run">
          <el-link @click="onClickRunLink">触发对比</el-link>
        </RouterLink>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <Finished />
        </el-icon>
        <RouterLink to="/abtest/result">
          <el-link @click="onClickResultLink">对比结果</el-link>
        </RouterLink>
      </el-menu-item>
    </el-menu>
  </div>
</template>
