/**
 * Create at 2022-1-23
 *
 */

// demo01, var tag: ! and ?
function tsdemo01(): void {
  class MyClass {
    name!: string // name 不为空
    age?: number  // age 属性有可能不存在
    private gender = 'male'
    getGender() {
      return this.gender
    }
  }

  let c = new MyClass()
  c.name = 'foo'
  console.log(c.name)
  if (c.age) {
    console.log(c.age)
  }
  console.log(c.getGender())
}


// demo02, 类型断言
function tsdemo0201(): void {
  // in
  interface Bird {
    sing(): void
  }
  interface Dog {
    bark(): void
  }
  class MyDog implements Dog {
    bark() {
      console.log('my dog bark')
    }
  }

  function trainAnimal(animial: Bird | Dog) {
    if ('bark' in animial) {
      ; (animial as Dog).bark()
    } else {
      ; (animial as Bird).sing()
    }
  }
  let dog = new MyDog()
  trainAnimal(dog)
}


function tsdemo0202(): void {
  // typeof 基础类型
  function add<T>(first: T, second: T) {
    if (typeof first === 'number' && typeof second === 'number') {
      return first + second
    }
    if (typeof first === 'string' && typeof second === 'string') {
      return first + ',' + second
    }
    throw new Error('invalid type')
  }
  console.log(add<number | string>('foo', 'bar'))

  // instanceof 引用类型
  class NumberObj {
    constructor(public count: number) { }
  }

  function addObj(first: Object | NumberObj, second: Object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
      return first.count + second.count
    }
    return 0
  }
  console.log(addObj(new NumberObj(10), new NumberObj(12)))
}


// demo03, 字符串枚举
function tsdemo03(): void {
  enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
  }
  console.log(Direction.Down)

  const value = 'UP'
  if (value === Direction.Up) {
    console.log('go up')
  }
}


// demo04, 泛型 定义多个类型
function tsdemo04(): void {
  function join<T, P>(first: T, second: P): string {
    return `${first}-${second}`
  }
  console.log(join<number, string>(1, 'one'))
}


// demo05, 泛型约束
function tsdemo05(): void {
  interface Item {
    name: string
  }
  class DataManager<T extends Item> {
    constructor(public data: T[]) { }
    getItem(index: number): string {
      return this.data[index].name
    }
  }

  const data = new DataManager([{ name: 'foo' }, { name: 'bar' }])
  console.log(data.getItem(1))
}


// demo06, 泛型 keyof
function tsdemo06(): void {
  interface Person {
    name: string
    age: number
    gender: string
  }
  class Teacher {
    constructor(public info: Person) { }
    getInfo<T extends keyof Person>(key: T): Person[T] {
      return this.info[key]
    }
  }

  const teacher = new Teacher({
    name: 'foo',
    age: 33,
    gender: 'male',
  })
  console.log(teacher.getInfo('name'))
}


// demo07, 命名空间
namespace Content {
  export class Header {
    constructor() {
      console.log('this is header')
    }
  }
  export class Text {
    constructor() {
      console.log('this is content text')
    }
  }
}


// demo08, 类装饰器
function tsdemo08(): void {
  function testDecorator(flag: boolean) {
    console.log('decorator: init')
    if (flag) {
      return function (constructor: any) {
        console.log('decorator: evaluated')
        constructor.prototype.print = () => {
          console.log('print')
        }
      }
    }
    return function (constructor: any) { }
  }

  @testDecorator(true)
  class Test {
    constructor() {
      console.log('init test')
    }
  }
  console.log('start test')
  let test = new Test()
    ; (test as any).print()
}


// demo09, 类装饰器
function tsdemo09(): void {
  function testDecorator<T extends new (...args: any[]) => any>(
    constructor: T
  ) {
    return class extends constructor {
      getName() {
        return this.name
      }
    }
  }

  @testDecorator
  class Test {
    constructor(public name: string) {
      console.log('init test')
      this.name = name
    }
  }
  console.log('start test')
  const t = new Test('bar')
  console.log((t as any).getName())
}


// demo10, 方法装饰器
function tsdemo10(): void {
  function getNameDecorator(
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('target:', target)
    console.log('key:', key)
    console.log('descriptor:', descriptor)
    descriptor.value = () => {
      return 'decorator'
    }
  }

  class Test {
    constructor(public name: string) { }
    @getNameDecorator
    getName() {
      return this.name
    }
  }
  const test = new Test('foo')
  console.log(test.getName())
}


// demo11, 属性装饰器
function tsdemo11(): void {
  function nameDecorator(target: any, key: string) {
    console.log(target)
    console.log(key)
    target[key] = 'bar'
  }

  class Test {
    @nameDecorator
    name = 'foo'
  }
  const test = new Test()
  console.log(test.name)
  console.log((test as any).__proto__.name)
}


// demo12, 装饰器 例子
function tsdemo12(): void {
  function catchError(msg: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
      const fn = descriptor.value
      descriptor.value = function () {
        try {
          fn()
        } catch (e) {
          console.error(msg)
        }
      }
    }
  }

  const userInfo: any = undefined
  class Test {
    @catchError('userInfo.name is null')
    getName() {
      return userInfo.name
    }
    @catchError('userInfo.age is null')
    getAge() {
      return userInfo.age
    }
  }

  const test = new Test()
  test.getName()
  test.getAge()
}


// main
tsdemo12()
