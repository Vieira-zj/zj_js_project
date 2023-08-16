<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const emit = defineEmits(['select-app'])

const app = reactive({
  selected: '',
  options: ['mpcheckout-core', 'mpcreate-checkout', 'shark-demo'],
})

function onSelectApp () {
  console.log('emit select-app')
  emit('select-app', app.selected)
}
function onClickAddNewApp () {
  console.log('onClickAddNewApp')
  dialog.visible = true
}
function onClickOpenDoc () {
  console.log('onClickOpenDoc')
}

// add new app dialog

const dialog = reactive({
  visible: false
})

const form = reactive({
  data: {
    env: 'test',
    appName: '',
  },
  rules: {
    env: [
      { required: true, message: '请输入环境', trigger: 'blur' },
    ],
    appName: [
      { required: true, message: '请输入应用名称', trigger: 'blur' },
    ],
  }
})
const formRef = ref(null)

function onDialogCancelAddApp () {
  console.log('onDialogCancelAddApp')
  dialog.visible = false
  form.data = {
    env: 'test',
    appName: '',
  }
}

async function onDialogSubmitAddApp (formEl) {
  console.log('onDialogSubmitAddApp')
  let isValid = false
  await formEl.validate((valid) => {
    isValid = valid
  })
  if (!isValid) {
    ElMessage.error('添加应用前请输入必填字段')
  }
}
</script>

<template>
  <!-- header -->
  <div>
    <el-button type="primary" plain icon="Document" style="margin-right: 10px" @click="onClickOpenDoc">
      使用说明
    </el-button>
    <span style="color: #606266; font-size: 14px">所属项目：</span>
    <el-select filterable clearable placeholder="请选择" @change="onSelectApp" v-model="app.selected">
      <el-option v-for="item of app.options" :key="item" :label="item" :value="item">
      </el-option>
    </el-select>
    <el-button @click="onClickAddNewApp" style="margin-left: 10px">应用接入</el-button>
  </div>

  <!-- dialog -->
  <el-dialog title="添加应用" width="35%" v-model="dialog.visible">
    <el-form ref="formRef" :model="form.data" :rules="form.rules" label-width="100px" style="width: 80%; margin: auto">
      <el-form-item prop="env" label="环境">
        <el-input placeholder="环境" v-model="form.data.env" style="width: 350px" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item prop="appName" label="应用名称">
        <el-input placeholder="应用名称" v-model="form.data.appName" style="width: 350px"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="onDialogCancelAddApp">取消</el-button>
        <el-button type="primary" @click="onDialogSubmitAddApp(formRef)">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
