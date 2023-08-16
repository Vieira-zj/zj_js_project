<script setup>
import { computed, reactive, ref, onMounted } from 'vue'

// 入门
const clickEvent = 'click'
const count = ref(0)
function increment () {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
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
const activeColor = ref('red')
const fontSize = ref(14)
const styleObject = reactive({
  color: 'red',
  fontSize: '12px'
})

// 条件渲染
const awesome = ref(true)

// 列表渲染
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
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
    <p :class="{ active: isActive, 'text-danger': hasError }">Class bind</p>
    <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">Style bind</p>
    <p :style="styleObject">Style object bind</p>
    <hr class="div-line" />

    <button @click="awesome = !awesome">Toggle</button>
    <template v-if="awesome">
      <h3>Vue is awesome!</h3>
      <p>One more thing</p>
    </template>
    <h3 v-else>Oh no</h3>
    <hr class="div-line" />

    <li v-for="(item, idx) of items" :key="item.message">
      {{ idx }} - {{ item.message }}
    </li>
    <hr class="div-line" />
    <li v-for="(value, key, idx) of myObject" :key="key">
      {{ idx }} - {{ key }}:{{ value }}
    </li>
  </div>
</template>

<style scoped>
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
