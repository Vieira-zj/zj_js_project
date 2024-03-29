/**
 * Created by zhengjin on 2020/9/18.
 */

// demo01, import async func
let { jsAsyncDemo01 } = require('./js_module')

// demo02, object attribute
function jsDemo02 () {
  routers = [{
    path: '/index',
  },
  {
    path: '/home',
    meta: {
      title: 'home',
      isShow: true,
    }
  },
  {
    path: '/page1',
    meta: {
      title: 'page1',
    }
  },
  {
    path: '/page2',
    meta: {
      title: 'page2',
      isShow: false
    }
  },
  ]

  // for page1 object, property 'isShow' is undefined which not equal false
  matched = routers.filter(item => item.meta && item.meta.title && item.meta.isShow !== false)
  console.log('routers:')
  matched.forEach(item => console.log(`title=${item.meta.title}, isShow=${item.meta.isShow}`))
}


// demo03, map()
function jsDemo03 () {
  (function () {
    let values = [1, 2, 3]
    res = values.map(val => {
      return {
        val: val + 1
      }
    })
    console.log(res)

    obj = {
      key: 'key1',
      val: 'value1',
      desc: 'desc1',
    }
    let { key, val } = obj
    new_obj = {
      key,
      val,
    }
    console.log(new_obj)
  })()
}


// demo04, async and await
function jsDemo04 () {
  function sleep (ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`sleep for ${ms} ms`)
      }, ms)
    })
  }

  // await 只能放在 async 函数内部使用，不能放在普通函数里面，否则会报错
  async function asyncFunc () {
    const tag = 'asyncFunction total executing:'
    console.time(tag)
    const sleep1 = await sleep(1000)
    console.log('sleep1: ' + sleep1)

    const [sleep2, sleep3, sleep4] = await Promise.all([sleep(2000), sleep(1000), sleep(1500)])
    console.log('sleep2: ' + sleep2)
    console.log('sleep3: ' + sleep3)
    console.log('sleep4: ' + sleep4)

    const sleepRace = await Promise.race([sleep(3000), sleep(1000), sleep(1500)])
    console.log('sleep race: ' + sleepRace)
    console.timeEnd(tag)
    return 'asyncFunction done.'
  }

  asyncFunc().then(data => {
    console.log(data)
  }).catch(err => {
    console.error(err)
  })
  console.log('after asyncFunction code executing...') // 立即执行
}


// demo05, title for string
function jsDemo05 () {
  let str = 'hello'
  str = str.toLowerCase()
  res = str.slice(0, 1).toUpperCase() + str.slice(1)
  console.log('title string:', res)
}


// demo06, debounce 防抖函数
function jsDemo06 () {
  debounce = (func, interval) => {
    let timer = null
    return (...values) => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func(...values)
      }, interval)
    }
  }

  myAddFunc = function (a, b) {
    console.log(`${a} + ${b} = ${a + b}`)
  }
  myWarpFunc = debounce((a, b) => {
    myAddFunc(a, b)
  }, 1000)

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log('invoke myWarpFunc')
      myWarpFunc(i, i + 1)
    }, i * 500)
  }
}


// demo07, 解构赋值 + 变量重命名
function jsDemo07 () {
  let srcObj = {
    name: 'foo',
    age: '21',
    skill: ['java', 'python'],
  }

  let { name: userName, skill: devSkill } = srcObj
  console.log(`user name: ${userName}\ndevelop skill: ${devSkill}`)
}


// demo08, sync sleep
function mySleep (sleep) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, sleep)
  })
}

function jsDemo08 () {
  let run = async function () {
    for (let i = 0; i < 50; i++) {
      await mySleep(30)
      console.log(i)
    }
  }
  run()
}


// demo09, async and non-async func
function jsDemo09 () {
  let run = async function () {
    console.log('#1 running')
    await mySleep(2000)
    console.log('#3 finish')
  }
  run()
  console.log('#2 done')
}


// demo10, version list sort
function jsDemo10 () {
  let vers = ['2021.10.v2', '2021.10.v3', '2021.10.v1', '2021.11.v2', '2021.11.v1']
  vers.sort(function (a, b) {
    let aitems = a.split('.')
    let bitems = b.split('.')
    if (aitems[0] !== bitems[0]) {
      return aitems[0] - bitems[0]
    }
    if (aitems[1] !== bitems[1]) {
      return aitems[1] - bitems[1]
    }
    return aitems[2].charAt(1) - bitems[2].charAt(1)
  })
  console.log(vers)
}


// demo11, datetime and timestamp
function jsDemo11 () {
  // datetime to timestamp
  let dt = '2021-10-06T15:00:06.539207Z'
  const items = dt.split('T')
  let dateItem = items[0]
  let timeItem = items[1].split('.')
  let dateItems = dateItem.split('-')
  let timeItems = timeItem[0].split(':')

  let date = new Date(dateItems[0], parseInt(dateItems[1], 10) - 1, dateItems[2], parseInt(timeItems[0]) + 8, timeItems[1], timeItems[2])
  console.log(date)
  console.log(date.getTime())

  // timestamp to datetime
  let ts = 1633532406000
  date = new Date(ts)
  console.log(date.getHours())
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}


// demo12, get dates between start and end date
function jsDemo12 () {
  let dateEqual = function (start, end) {
    return start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth() && start.getDate() === end.getDate()
  }

  let start = [2021, 12, 16]
  let startDt = new Date(start[0], start[1] - 1, start[2])
  let end = [2022, 1, 7]
  let endDt = new Date(end[0], end[1] - 1, end[2])
  while (!dateEqual(startDt, endDt)) {
    startDt.setDate(startDt.getDate() + 1)
    console.log(`${startDt.getFullYear()}-${startDt.getMonth() + 1}-${startDt.getDate()}`)
  }
}


// demo13, undefined (初始化值), null (空)
function jsDemo13 () {
  console.log('undefined cases:')
  let myVar
  console.log(myVar)

  const obj = {}
  console.log(obj.unknownProp)

  function myFunc () {
    return
  }
  console.log(myFunc())

  function myPrint (x) {
    console.log(x)
  }
  myPrint()

  // 参数默认值
  console.log()
  function myPrint2 (arg = 'abc') {
    console.log(arg)
  }
  myPrint2()
  myPrint2(undefined)
  myPrint2(null)
  myPrint2('hello')

  // 解构的默认值
  console.log()
  const [a = 'a', b = 'b'] = ['c']
  console.log(a, b)
  const [x = 'x', y = 'y'] = [undefined, 'z']
  console.log(x, y)

  const { prop: c = 'c' } = {}
  console.log(c)
  const { prop: d = 'd' } = { prop: undefined }
  console.log(d)

  // nullish 合并算子 ??
  console.log()
  console.log(undefined ?? 'default')
  console.log(null ?? 'default')
  console.log(0 ?? 'default')
  console.log(123 ?? 'default')
  console.log(' ' ?? 'default')
  console.log('abc' ?? 'default')

  console.log()
  function setName (obj) {
    obj.name = obj.name ?? '(Unnamed)'
    return obj
  }
  console.log(setName({ name: undefined }))
  console.log(setName({ name: null }))
  console.log(setName({ name: 'bar' }))
}


// demo14, undefined (初始化值), null (空)
function jsDemo14 () {
  console.log('null cases:')
  // 原型链
  console.log(Object.getPrototypeOf(Object.prototype))

  // JSON 数据格式只支持 null, 不支持 undefined
  console.log(JSON.stringify({ 'a': undefined, 'b': null }))

  // 正则表达式，匹配失败
  console.log(/a/.exec('x'))
}


// demo15, put kv for object
function jsDemo15 () {
  let putkv = (obj, k, v) => {
    return { ...obj, [k]: v }
  }

  let obj = {
    name: 'foo',
    age: 31,
    gender: 'male',
  }
  console.log(JSON.stringify(obj, null, 2))

  const k = 'name'
  obj[k] = 'bar'

  obj = putkv(obj, 'age', 35)
  obj = putkv(obj, 'skill', 'java,js')
  console.log(JSON.stringify(obj, null, 2))
}


// demo16, map and array
function jsDemo16 () {
  // init map
  // map 接受任何类型的键，object 键必须是字符串或符号（Symbol）
  let obj = { 'a': 'a' }
  let fn = () => 'key'
  // 使用数组语法一次初始化多个值
  let map = new Map([[123, true], [true, 123], [obj, 'object'], [fn, 'function']])

  console.log(map.keys())
  console.log(map.get(obj))
  console.log(map.get(fn))
  // 对象和函数是按引用存储的，所以 {'a':'a'} 和 obj 是不同的对象
  console.log(map.get({ 'a': 'a' })) // undefined
  console.log()

  // init array
  map = new Map([[1, 'one'], [2, 'two']])
  let arr = Array.from(map)
  console.log(arr)

  let newArr = [...map]
  console.log(newArr)
}


// demo17, iterator of map, object
function jsDemo17 () {
  // map
  map = new Map()
  map.set(0, 'zero').set(1, 'one')
  for (const key of map.keys()) {
    console.log(key)
  }
  for (const [key, value] of map) {
    console.log(`key: ${key}, value: ${value}`)
  }
  map.forEach((value, key) => {
    console.log(`key: ${key}, value: ${value}`)
  })

  console.log(map.size)
  console.log()

  // object
  obj = { 0: 'zero', 1: 'one' }
  for (let key in obj) {
    console.log(`key: ${key}, value: ${obj[key]}`)
  }
  console.log()

  Object.keys(obj).forEach(key => {
    console.log('key:', key)
  })
  Object.values(obj).forEach(val => {
    console.log('value:', val)
  })
  Object.entries(obj).forEach(item => {
    console.log(`key: ${item[0]}, value: ${item[1]}`)
  })
}


// demo18, distinct for array
function jsDemo18 () {
  const books = [
    { id: 1, title: 'How To Win Friends And Influence People', author: 'Dale Carnegie' },
    { id: 1, title: 'How To Win Friends And Influence People', author: 'Dale Carnegie' },
    { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' },
  ]

  let map = new Map(books.map(item => [item.id, item]))
  let uniqueBooks = [...map.values()]
  console.log(uniqueBooks)
}


// demo19, reduce()
function jsDemo19 () {
  const shoppintCart = [
    { price: 10, amount: 1 },
    { price: 15, amount: 3 },
    { price: 20, amount: 2 },
  ]
  let result = shoppintCart.reduce(
    (accumulator, currentItem) => {
      return {
        totalItems: accumulator.totalItems + currentItem.amount,
        totalPrice: accumulator.totalPrice + currentItem.price,
      }
    },
    { totalItems: 0, totalPrice: 0 }
  )
  console.log(result)
}


// demo20, iterator
function jsDemo20 () {
  // js 中都是引用传递
  const products = [
    { price: 10, amount: 1 },
    { price: 15, amount: 3 },
    { price: 20, amount: 2 },
  ]

  for (let p of products) {
    if (p.price === 15) {
      p = { price: 16, amount: 6 } // no effect
    } else {
      p.amount += 1
    }
  }
  products.forEach(item => console.log(item))
  console.log()

  for (let i = 0; i < products.length; i++) {
    p = products[i]
    if (p.price === 15) {
      products[i] = { price: 29, amount: 9 } // take effect
    } else {
      p.amount += 1
    }
  }
  products.forEach(item => console.log(item))
}


// demo21, flat paths to tree
function jsDemo21 () {
  let paths = [
    'shopee.marketplace.order.qa.2e2test',
    'shopee.marketplace.order.qa.automation',
    'shopee.marketplace.order.eff.replayer',
    'shopee.marketplace.promotion.eff.goc',
  ]

  let root = {}
  for (let path of paths) {
    let cur = root
    let level = 1
    for (let item of path.split('.')) {
      let key = `l${level} ${item}`
      if (!Object.keys(cur).includes(key)) {
        cur[key] = {}
      }
      cur = cur[key]
      level += 1
    }
    cur['id'] = path
    cur['desc'] = 'leaf node'
  }

  console.log(JSON.stringify(root, null, 2))
}


// demo22, chain
function jsDemo22 () {
  let setups = []
  let clearups = []
  for (let i = 0; i < 3; i++) {
    setups.unshift(`pre${i}`)
    clearups.push(`after${i}`)
  }
  console.log('setups:', setups)
  console.log('clearups:', clearups)

  // apply() 方法接受数组形式的参数
  let chain2 = ['process']
  chain2.unshift.apply(chain2, setups)
  chain2.push.apply(chain2, clearups)
  console.log('final chain:', chain2)
}


// demo23, print html by template
function jsDemo23 () {
  const title = 'html template test'
  const body = 'template body'
  let tmpl = `<!doctype html>
<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    <h1>${body}</h1>
  </body>
</html>`
  console.log('template:\n' + tmpl)
}


if (require.main === module) {
  let run = async () => {
    await jsAsyncDemo01()
    jsDemo23()
    console.log(__filename, 'DONE.')
  }

  // SyntaxError: await is only valid in async functions and the top level bodies of modules
  // await run()
  run()
}
