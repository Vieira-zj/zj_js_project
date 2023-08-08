<script setup>
import { apiPingServer } from '@/assets/utils.js'

function onClickPrimaryLink () {
  console.log('onClickPrimaryLink')
}

async function onClickHealthCheck () {
  await apiPingServer()
}
</script>

<template>
  <div>
    <h1>ELement Plus Demo</h1>
    <p>
      <el-link type="primary" @click="onClickPrimaryLink">
        Primary Link
      </el-link>
      <el-button style="margin-left: 10px" @click="onClickHealthCheck">Health Check</el-button>
    </p>
  </div>
</template>
