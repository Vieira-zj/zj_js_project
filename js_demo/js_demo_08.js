/**
 * Created by zhengjin on 2020/9/18.
 */

// demo01, error handler in async func
function jsDemo01 () {
  let base = 1

  let func1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (base <= 0) {
          reject(-1)
          return
        }
        base++
        resolve(base)
      }, 1000)
    })
  }

  let func2 = () => {
    return new Promise((resolve) => {
      if (base > 10) {
        throw new Error('mock error')
      }
      setTimeout(() => {
        base++
        resolve(base)
      }, 1000)
    })
  }

  let run = async function () {
    try {
      let res1 = await func1()
      let res2 = await func2()
      console.log('results:', (res1 + res2))
    } catch (err) {
      console.error('catch:', err)
    }
  }
  run()
}


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


// demo03, map
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
function jsDemo08 () {
  let mySleep = (sleep) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, sleep)
    })
  }

  let run = async function () {
    for (let i = 0; i < 50; i++) {
      await mySleep(30)
      console.log(i)
    }
  }
  run()
}


// demo09, version list sort
function jsDemo09 () {
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


if (require.main === module) {
  jsDemo09()
  console.log(__filename, 'DONE.')
}
