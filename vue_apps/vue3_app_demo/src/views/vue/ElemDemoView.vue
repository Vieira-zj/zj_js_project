<script setup>
function onClickPrimaryLink () {
  console.log('onClickPrimaryLink')
}
</script>

<template>
  <div>
    <h1>ELement Plus Demo</h1>
    <p>
      <el-link type="primary" @click="onClickPrimaryLink">
        Primary Link
      </el-link>
    </p>
  </div>
</template>
