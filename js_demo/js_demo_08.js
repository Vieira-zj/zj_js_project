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


if (require.main === module) {
  jsDemo02()
  console.log(__filename, 'DONE.')
}
