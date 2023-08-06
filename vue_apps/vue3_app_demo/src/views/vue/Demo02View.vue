<script setup>
import { ref, onMounted, watch } from 'vue'
import BtnCounter from '../../components/BtnCounter.vue'

// 事件处理
const name = ref('vue.js')
function greet (event) {
  alert(`Hello ${name.value}`)
  if (event) {
    alert(event.target.tagName)
  }
}

function say (message, event) {
  alert(message)
  if (event) {
    alert(event.target.tagName)
  }
}

// 表单输入绑定
const message = ref('')
const picked = ref('')

const selected = ref('A')
const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])

// 侦听器
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

watch(question, async (newQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const result = await fetch('https://yesno.wtf/api')
      answer.value = (await result.json()).answer
    } catch (err) {
      answer.value = 'Error! Could not reach the API. ' + err.message
    }
  }
})

// 模板引用
const input = ref(null)

// 组件
const fontSize = ref(14)

// 生命周期
onMounted(() => {
  console.log(`the component is now mounted.`)
  input.value.focus()
})
</script>

<template>
  <div>
    <h1>This is vue basic demo</h1>
    <hr class="div-line" />

    <!-- part1 -->
    <button @click="greet">Greet</button>
    <hr class="div-line" />
    <button @click="say('Hello', $event)">Say Hello</button>
    <hr class="div-line" />

    <p>Message is: {{ message }}</p>
    <input type="text" v-model="message" placeholder="edit me">
    <hr class="div-line" />

    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="one" v-model="picked">
    <label for="one">One</label>
    <input type="radio" id="two" value="two" v-model="picked" style="margin-left: 10px;">
    <label for="two">Two</label>
    <hr class="div-line" />

    <p>Select: {{ selected }}</p>
    <select v-model="selected">
      <option v-for="option of options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <hr class="div-line" />

    <!-- part2 -->
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <hr class="div-line" />
    <input type="text" ref="input">
    <hr class="div-line" />

    <BtnCounter title="Component Demo" @enlarge-text="fontSize += 1">
      Something happened.
    </BtnCounter>
    <p :style="{ fontSize: fontSize + 'px' }">
      My journey with Vue
    </p>
  </div>
</template>

<style scoped>
.div-line {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
