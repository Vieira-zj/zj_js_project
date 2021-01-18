/**
 * Created by zhengjin on 2018/1/27.
 */

// demo 01, task execution order
function jsDemo01 () {
  (function () {
    // #1 main
    console.log('1')

    // #3 async task
    setTimeout(function () {
      console.log('2')
    }, 0)

    // #2 async micro task
    Promise.resolve()
      .then(function () {
        console.log('3')
      })
      .then(function () {
        console.log('4')
      })

    console.log('5')
  })()
}


// demo 02, object property
function jsDemo02 () {
  (function () {
    let obj1 = {
      data: ['Jan', 'Feb', 'Mar']
    }
    console.log('object1 data:', obj1.data.join(', '))

    let obj2 = {
      data: (() => {
        return ['Jan', 'Feb', 'Mar']
      })()
    }
    console.log('object2 data:', obj2.data.join(', '))

    let obj3 = {
      data () {
        return ['Jan', 'Feb', 'Mar']
      }
    }
    console.log('object3 data:', obj3.data().join(', '))
  })()
}


// demo 03, instance access
function jsDemo03 () {
  (function () {
    let inst = {
      count: 1,
      cal: {
        increment (num) {
          // cannot use this.count
          inst.count = inst.count + num
        },
        decrement (num) {
          inst.count = inst.count - num
        }
      }
    }

    inst.cal.increment(5)
    console.log('count:', inst.count)
    inst.cal.decrement(3)
    console.log('count:', inst.count)
  })()
}


// demo 04, es6 operator ...
function jsDemo04 () {
  (function () {
    // #1
    let myAdd = function (x, y, z) {
      return x + y + z
    }
    let tmpArr = [1, 2, 3]
    console.log('results:', myAdd(...tmpArr))

    // #2
    let myFilterOdd = function (...items) {
      return items.filter(item => item % 2 === 0)
    }
    console.log('results', myFilterOdd(1, 2, 3, 4, 5).join(', '))

    // #3, jslint error
    // jshint:
    // https://www.cnblogs.com/tadini/p/5279335.html
    // http://www.htmlhifive.com/conts/web/view/library/JSLint_JSHint
    // let obj1 = { k1: 'value1' }
    // let obj2 = { k2: 'value2' }
    // let tmpObj = {
    //   desc: 'objects combine',
    //   ...obj1,
    //   ...obj2
    // }
    // console.log('results:', JSON.stringify(tmpObj))
  })()
}


// demo 05, reuse object
function jsDemo05 () {
  (function () {
    getDataByType = dataObj => {
      return typeof dataObj.data === 'function' ? dataObj.data() : dataObj.data
    }

    myPrintData = dataObj => {
      let data = getDataByType(dataObj)
      console.log('object:', JSON.stringify(data))
    }

    myAddDataAndPrint = dataObj => {
      let data = getDataByType(dataObj)
      data.count++
      console.log('object:', JSON.stringify(data))
    }

    console.log('shared object:')
    sharedDataObj = {
      data: {
        state: 'done',
        count: 0
      }
    }
    sharedDataObj.data.count++
    myAddDataAndPrint(sharedDataObj)
    myPrintData(sharedDataObj)

    console.log('\nnon-shared object:')
    nonSharedDataObj = {
      data () {
        return {
          state: 'done',
          count: 0
        }
      }
    }
    nonSharedDataObj.data().count++
    myAddDataAndPrint(nonSharedDataObj)
    myPrintData(nonSharedDataObj)
  })()
}


// demo 06, Array.includes and Array.some
function jsDemo06 () {
  (function () {
    let nameList = ['jim', 'henry', 'vieira', 'jin']
    console.log('name found:', nameList.includes('jin'))

    let userList = [
      {
        name: 'jim',
        age: '12'
      },
      {
        name: 'vieira',
        age: '15'
      },
      {
        name: 'jin',
        age: '22'
      }
    ]
    console.log(
      'user with age 15 found:',
      userList.some(user => user.age === '15')
    )

    let data1 = ['admin', 'tester', 'guest', 'dev']
    let data2 = ['guest', 'root']
    console.log('mix:', data1.some(role => data2.indexOf(role) >= 0))
  })()
}


// demo 07, class and object
function jsDemo07 () {
  (function () {
    var myapp = {}
    myapp.Model = function () {
      var val = 0
      this.add = function (v) {
        if (val < 100) val += v
      }
      this.sub = function (v) {
        if (val > 0) val -= v
      }
      this.getVal = function () {
        return val
      }
    }

    model = new myapp.Model()
    model.add(10)
    console.log('add results:', model.getVal()) // 10
    model.sub(5)
    console.log('sub results:', model.getVal()) // 5
  })()
}


// demo 08, object deep copy
function jsDemo08 () {
  (function () {
    let list = ['js', 'css', 'html']
    let copiedList = [...list, 'jquery', 'vue']
    console.log('list == newList:', list === copiedList)
    console.log('new list:', copiedList)

    let person = {
      name: 'Henry',
      age: 21,
      location: 'SH'
    }
    let copiedTest = { ...person, role: 'tester' }
    console.log('\nperson == copied:', person === copiedTest)
    console.log('copied object:', JSON.stringify(copiedTest, null, '  '))

    let copiedDev = Object.assign({ role: 'dev' }, person)
    console.log('\nperson == copied:', person === copiedDev)
    console.log('copied object:', JSON.stringify(copiedDev, null, '  '))
  })()
}


// demo 09, argument with default
function jsDemo09 () {
  (function () {
    let updateTodo = function (todo, { text = todo.text, done = todo.done }) {
      todo.text = text
      todo.done = done
      return todo
    }

    let todo = {
      text: 'Java',
      done: false
    }
    console.log('#1 todo:', JSON.stringify(updateTodo(todo, {})))
    console.log('#2 todo:', JSON.stringify(updateTodo(todo, { done: true })))
    console.log('#3 todo:', JSON.stringify(updateTodo(todo, { text: 'Python', done: false })))
  })()
}


// demo 10, this with func
function jsDemo10 () {
  function Person (name) {
    this.name = name
    this.printName01 = function () {
      console.log('printName01:', this.name)
    }
  }

  Person.prototype.printName02 = function () {
    console.log('printName02:', this.name)
  }

  let p = new Person('Bar')
  p.printName03 = function () {
    console.log('printName03:', this.name)
  }

  p.printName01() // Bar
  p.printName02() // Bar
  p.printName03() // Bar
}


// demo 11, this with => func
function jsDemo11 () {
  function Student (name) {
    this.name = name
    this.printName01 = () => {
      console.log('printName01:', this.name)
    }
  }

  Student.prototype.printName02 = () => {
    console.log('printName02:', this.name)
  }

  let s = new Student('Foo')
  s.printName03 = () => {
    console.log('printName03:', this.name)
  }

  // 箭头函数，this隐式地绑定其父级作用域
  s.printName01() // Foo
  s.printName02() // undefined
  s.printName03() // undefined
}


// demo 12, map and filter
function jsDemo12 () {
  (function () {
    let all = ['text', 'image', 'other']
    let state = {
      text: 'txt',
      image: 'jpg',
    }

    all.map(key => state[key])
      // .filter(value => Boolean(value))
      .filter(Boolean)
      .map(val => console.log('value:', val))
  })()
}


// demo 13, custom promise
function jsDemo13 () {
  // sync invoke
  new MyPromise((resolve, reject) => {
    resolve('sync test')
  }).then((data) => {
    console.log('resolve:', data)
  }, (data) => {
    console.log('reject:', data)
  })

  // async invoke
  new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('async test')
    }, 1000)
  }).then((data) => {
    console.log('resolve:', data)
  }, (data) => {
    console.log('reject:', data)
  })

  // chained invoke
  new MyPromise((resolve, reject) => {
    resolve('init')
  }).then(data => {
    console.log(data)
    return data + ':chained'
  }).then(data => {
    console.log(data)
  })
}

function MyPromise (exector) {
  let _this = this
  this.status = 'pending'
  this.value = undefined
  this.resolveCbs = []
  this.rejectCbs = []

  try {
    exector(resolve, reject)
  } catch (e) {
    reject(e)
  }

  function resolve (value) {
    if (_this.status === 'pending') {
      _this.status = 'fulfilled'
      _this.value = value
      _this.resolveCbs.forEach(cbFn => {
        cbFn(_this.value)
        _this.resolveCbs.shift()
      })
    }
  }

  function reject (value) {
    if (_this.status === 'pending') {
      _this.status = 'rejected'
      _this.value = value
      _this.rejectCbs.forEach(cbFn => {
        cbFn(_this.value)
        _this.rejectCbs.shift()
      })
    }
  }
}

MyPromise.prototype.then = function (resolveCallback, rejectCallback) {
  let _this = this
  if (this.status === 'fulfilled') {
    return new MyPromise((resolve, reject) => {
      let result = resolveCallback(_this.value)
      if (result instanceof MyPromise) {
        result.then(resolve, reject)
      } else {
        resolve(result)
      }
    })
  }

  if (this.status === 'rejected') {
    return new MyPromise((resolve, reject) => {
      let result = rejectCallback(_this.value)
      if (result instanceof MyPromise) {
        result.then(resolve, reject)
      } else {
        reject(result)
      }
    })
  }

  if (this.status === 'pending') {
    return new MyPromise((resolve, reject) => {
      _this.resolveCbs.push(function () {
        let result = resolveCallback(_this.value)
        if (result instanceof Promise) {
          result.then(resolve, reject)
        } else {
          resolve(result)
        }
      })

      _this.rejectCbs.push(function () {
        let result = rejectCallback(_this.value)
        if (result instanceof MyPromise) {
          result.then(resolve, reject)
        } else {
          reject(result)
        }
      })
    })
  }
}


// demo 14, instance, class and prototype method
function Animal (name) {
  this.name = name || 'Animal'

  // 实例方法
  this.sleep = function () {
    console.log(this.name + ' is sleepping')
  }
}

// 类方法
Animal.eat = function (food) {
  console.log('eat ' + food)
}

// 原型方法
Animal.prototype.play = function (play) {
  console.log(this.name + ' is playing ' + play)
}

function jsDemo14 () {
  Animal.eat('apple')
  console.log('name:', Animal.name)
  // 不可以调用原型方法
  // Animal.play('warter')
  // 不可以调用实例方法
  // Animal.sleep()

  let a1 = new Animal('cat')
  a1.sleep()
  a1.play('water')
  // 不可以调用类方法
  // a1.eat('apply')

  let a2 = new Animal('dog')
  a2.sleep()
  a2.play('ball')

  console.log('\na1.sleep === a2.sleep:', a1.sleep === a2.sleep) // false
  console.log('a1.play === a2.play:', a1.play === a2.play) // true
}


// demo15, promise
function jsDemo1501 () {
  // Promise同步执行, promise.then异步执行
  (function () {
    new Promise((resolve, _) => {
      console.log('first')
      resolve()
      console.log('second')
    }).then(() => {
      console.log('third')
    })
    console.log('fourth')
  });

  // promise状态: pending, fulfilled, reject
  (function () {
    const prom = new Promise((res, _) => {
      setTimeout(() => { res('success') }, 1000)
    })
    const prom2 = prom.then(() => {
      throw new Error('mock error')
    }).catch((err) => {
      console.error(err)
    })

    // pending
    console.log('prom', prom)
    console.log('prom2', prom2)

    setTimeout(() => {
      console.log('prom', prom)
      console.log('prom2', prom2)
    }, 2000)
  })();
}


function jsDemo1502 () {
  (function () {
    let val = 0
    new Promise((res, rej) => {
      val > 0 ? res('pass') : rej('fail')
    }).then(data => {
      console.log('then:', data)
    }, err => {
      console.error('reject:', err) // handle fail
    }).catch(err => {
      console.error('catch:', err)
    })
  });

  (function () {
    let val = 0
    new Promise((res, rej) => {
      val > 0 ? res('pass') : rej('fail')
    }).then(data => {
      console.log('then:', data)
    }).catch(err => {
      console.error('catch:', err) // handle fail
    })
  });

  (function () {
    let val = 0
    new Promise((res, rej) => {
      val > 0 ? res('pass') : rej('mock error')
    }).then(data => {
      console.log('then:', data)
    }, err => {
      console.log('reject:', err) // handle fail
      throw new Error(err)
    }).catch(err => {
      console.error('catch:', err) // handle error
    })
  });

  // 同步执行多个异步方法
  (function () {
    new Promise((resolve, _) => {
      setTimeout(() => {
        console.log('1st')
        resolve('2nd')
      }, 1000)
    }).then(data => {
      // should return a promise
      return new Promise((resolve, _) => {
        setTimeout(() => {
          console.log(data)
          resolve('3rd')
        }, 1000)
      })
    }).then(data => {
      setTimeout(() => {
        console.log(data)
      }, 1000)
    }).catch(err => {
      console.error(err)
    })
  })();
}


if (require.main === module) {
  jsDemo1502()
  console.log(__filename, 'DONE.')
}
