<script setup>
import { computed, reactive, ref, onMounted } from 'vue'

// 入门
const clickEvent = "click"
const count = ref(0)
function increment () {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}`)
})

// 原始 HTML
const rawHtml = '<span style="color: red">This should be red.</span>'
const ok = false

// 深层响应性
const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})
function mutateDeeply () {
  obj.value.nested.count++
  obj.value.arr.push("baz")
}

// 计算属性
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

// 可写计算属性
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
  get () {
    return firstName.value + ' ' + lastName.value
  },
  set (newValue) {
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

// 绑定对象
const isActive = ref(true)
const hasError = ref(false)

// 绑定内联样式
// TODO:
</script>

<template>
  <div>
    <h1>This is vue basic demo</h1>
    <hr class="div-line" />

    <!-- part1 -->
    <button @[clickEvent]="increment">Count is: {{ count }}</button>
    <hr class="div-line" />
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <hr class="div-line" />
    <p>Is ok: {{ ok ? 'Yes' : 'No' }}</p>
    <hr class="div-line" />
    <button @click="mutateDeeply">Mutate</button>
    <p>Count:{{ obj.nested.count }}, Value:{{ obj.arr.join(',') }}</p>
    <hr class="div-line" />

    <!-- part2 -->
    <p>Has published books: {{ publishedBooksMessage }}</p>
    <hr class="div-line" />
    <p>
      <label for="firstname">First Name</label>
      <input id="firstname" type="text" v-model="firstName">
    </p>
    <p>
      <label for="lastname">Last Name</label>
      <input id="lastname" type="text" v-model="lastName">
    </p>
    <p>FullName: {{ fullName }}</p>
    <hr class="div-line" />

    <!-- part3 -->
    <div :class="{ active: isActive, 'text-danger': hasError }">Sytle class bind</div>
    <hr class="div-line" />
  </div>
</template>

<style>
.div-line {
  margin-top: 10px;
  margin-bottom: 10px;
}

.active {
  font-weight: bold;
}

.text-danger {
  color: red;
}
</style>
