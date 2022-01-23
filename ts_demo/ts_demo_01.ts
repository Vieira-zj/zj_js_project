/**
 * Create at 2022.1.23
 */

// demo01, ts tag: ! and ?
function tsdemo01(): void {
  class myClass {
    name!: string
    age?: number
  }

  let c = new myClass()
  c.name = 'foo'
  console.log(c.name)
  if (c.age) {
    console.log(c.age)
  }
}

// demo02, object to json
function tsdemo02(): void {
  interface myObject {
    name: string
    age?: number
  }

  let obj: myObject = {
    name: 'foo',
    age: 31,
  }
  console.log(JSON.stringify(obj, null, 2))
}

// demo03, 装饰器
function tsdemo03(): void {
  function f() {
    console.log('f(): evaluated')
    return function (
      target,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      console.log('target:', target)
      console.log('key:', propertyKey)
      console.log('descriptor:', descriptor)
      console.log('f(): called')
    }
  }

  class myClass {
    @f()
    print(): void {
      console.log('my class print')
    }
  }

  let c = new myClass()
  c.print()
}

// main
tsdemo02()
