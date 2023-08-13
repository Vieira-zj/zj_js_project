<script setup>
import { sleep } from '@/assets/utils.js'

import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const loading = ref(false)

const form = reactive({
  data: {
    duration: undefined,
    newAppName: '',
    newPFB: '',
    oldAppName: '',
    oldPFB: '',
    mainIdentities: '',
  },
  rules: {
    newAppName: [
      { required: true, message: '请输入新流程应用', trigger: 'blur' },
    ],
    newPFB: [
      { required: true, message: '请输入新流程PFB', trigger: 'blur' },
    ],
    oldAppName: [
      { required: true, message: '请输入老流程应用', trigger: 'blur' },
    ],
    oldPFB: [
      { required: true, message: '请输入老流程PFB', trigger: 'blur' },
    ],
  },
})
const formRef = ref(null)

const shortcuts = reactive(
  [
    {
      text: '今天',
      onClick: function (picker) {
        const end = new Date()
        const start = new Date(new Date().setHours(0, 0, 0, 0))
        picker.$emit('pick', [start, end])
      },
    },
    {
      text: '昨天至今',
      onClick: function (picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24)
        picker.$emit('pick', [start, end])
      },
    },
  ]
)

const disabledDate = (time) => {
  return time.getTime() > Date.now()
}

async function onClickRunCompare (formEl) {
  let isValid = false
  await formEl.validate((valid) => {
    isValid = valid
  })
  if (!isValid) {
    ElMessage.error('添加应用前请输入必填字段')
    return
  }

  loading.value = true
  await sleep(2000)
  loading.value = false
}
</script>

<template>
  <div>
    <el-card v-loading="loading">
      <el-form ref="formRef" label-width="150px" :model="form.data" :rules="form.rules">
        <el-row>
          <el-col :span="11">
            <el-form-item prop="duration" label="选取时间段">
              <el-date-picker v-model="form.data.duration" type="datetimerange" align="right" unlink-panels
                range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd HH:mm:ss"
                :shortcuts="shortcuts" :disabled-date="disabledDate">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="11">
            <el-form-item prop="newAppName" label="新流程应用">
              <el-input clearable placeholder="请输入内容" v-model="form.data.newAppName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="newPFB" label="新流程PFB">
              <el-input clearable placeholder="请输入内容" v-model="form.data.newPFB"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="11">
            <el-form-item prop="oldAppName" label="老流程应用">
              <el-input clearable placeholder="请输入内容" v-model="form.data.oldAppName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="oldPFB" label="老流程PFB">
              <el-input clearable placeholder="请输入内容" v-model="form.data.oldPFB"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="22">
            <el-form-item prop="mainIdentities" label="主调用标识">
              <el-input type="textarea" placeholder="请输入需要触发对比的主调用标识，使用“;”号分隔" :rows="3"
                v-model="form.data.mainIdentities">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="22">
            <el-button type="primary" style="float: right" @click="onClickRunCompare(formRef)">执行</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
