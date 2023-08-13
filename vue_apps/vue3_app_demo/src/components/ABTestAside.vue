<script setup>
import { getScreenHeight } from '../assets/utils.js'

import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const activemenu = ref("1")

function onClickRunLink () {
  activemenu.value = "1"
  router.push('/abtest/run')
}
function onClickResultLink () {
  activemenu.value = "2"
  router.push('/abtest/result')
}
</script>

<template>
  <div>
    <el-menu :default-active="activemenu" class="el-menu-vertical-demo" :style="{ height: getScreenHeight() + 'px' }">
      <el-menu-item index="1">
        <el-icon>
          <VideoPlay />
        </el-icon>
        <span @click="onClickRunLink">触发对比</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <Finished />
        </el-icon>
        <span @click="onClickResultLink">对比结果</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
