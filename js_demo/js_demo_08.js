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
  debounce = (func) => {
    let timer = null
    return (val) => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func(val)
      }, 1000)
    }
  }

  myFunc = function (val) {
    console.log('value:', val)
  }
  myWarpFunc = debounce(myFunc)

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log('invoke myFunc')
      myWarpFunc(i)
    }, i * 500);
  }
}


if (require.main === module) {
  jsDemo06()
  console.log(__filename, 'DONE.')
}
