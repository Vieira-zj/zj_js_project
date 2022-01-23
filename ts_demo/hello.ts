/**
 * Refer:
 * https://www.tutorialspoint.com/typescript/index.htm
 */

var message: string = 'Hello World'
console.log(message)

/**
 * 基本类型
 *
 * string, number, boolean, undefined, null, any, never, void
 */

// void 表示类型为 undefined 或 null
// 例子：void 用于表示函数没有返回值，只是执行某些操作
// 一个没有显式返回的函数，默认 return undefined. 符合 void 类型只能被赋值为 undefined 或 null
function show(): void {
  console.log('typescript')
}

// never 表示永远不存在值
// 例子：一个只会抛出异常的函数，它的返回值并不存在
function error(): never {
  throw new Error('mock error')
}

// any 表示可能为任何类型
// 例子：不确定变量的类型或类型是动态的
let dyn: any = 'dyn_var'
dyn = true
console.log(dyn)

/**
 * 引用类型
 *
 * 除了 JS 中的数组类型、对象类型，还扩展了枚举类型，元祖类型。
 */

// 数组泛型
let arr: Array<string> = ['one', 'two', 'three']
arr.push('four')
arr.forEach((item) => console.log(item))

// 只读数组 不存在修改数组的方法
let ro: ReadonlyArray<number> = [1, 2, 3]

// 对象object 除基本类型外的引用类型
function myPrint(o: object) {
  console.log(o.toString())
}
myPrint(ro)

// 元组 由定长数组构成，数组中的元素是某（些）类型
let x: [string, number]
x = ['one', 1]
myPrint(x)

// 枚举 默认枚举值从 0 开始，可以手动赋值
enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Green
console.log(color)

enum Animal {
  Dog = 2,
  Cat,
  Birl,
}

let animal: Animal = Animal.Cat
console.log(animal)
let animalName = Animal[4]
console.log(animalName)

/**
 * 类型断言
 *
 * 断言发生在两种类型存在联系的情况，它并不是将一种类型转换成另一种类型。
 */

let str: any = 'test'
let strLen = (str as string).length
console.log(strLen)

// 联合类型
let foo: string | number = 'typescript'
let answer: string = foo as string
console.log(answer)

/**
 * 接口
 *
 */

// 匿名接口
function getName(o: { name: string }): string {
  return o.name
}

// 可选属性
interface Student {
  name: string
  age?: number
}

function getStudentName(s: Student): string {
  return s.name
}

let s: Student = { name: 'Foo' }
console.log(getStudentName(s))

// 只读属性
interface Point {
  readonly x: number
  readonly y: number
}

let p: Point = { x: 10, y: 20 }
console.log(p)

// 字符串索引类型
interface Point1 {
  [prop: string]: number
}

let p1: Point1 = { x: 1, y: 2 }
console.log(p1)

// 数字索引类型
interface StringArray {
  [index: number]: string
}

let myArray: StringArray = ['js', 'ts', 'java']
console.log(myArray)

// 函数类型
interface Sum {
  (a: number, b: number): number
}

let sum: Sum = function (num1, num2) {
  return num1 + num2
}

// 类类型 类的实例部分类型
interface iPerson {
  age: number
  getAge(): number
}

class Person implements iPerson {
  age: number
  constructor(age: number) {
    this.age = age
  }
  getAge(): number {
    return this.age
  }
}

// 接口继承
interface TwoD {
  x: number
  y: number
}

interface ThreeD extends TwoD {
  z: number
}

let p2: ThreeD = { x: 1, y: 2, z: 3 }
console.log(p2)

// 接口继承类
class Rect {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  getRect(): number {
    return this.x * this.y
  }
}

interface iRect extends Rect {
  z: number
  getCube(): number
}

class Cube extends Rect implements iRect {
  z: number
  constructor(x: number, y: number, z: number) {
    super(x, y)
    this.z = z
  }
  getCube() {
    return this.x * this.y * this.z
  }
}

let cube: Cube = new Cube(2, 3, 4)
console.log('results:', cube.getCube())

/**
 * 类
 *
 * 修饰符 protected 和 private 类似，区别在于使用 protected 修饰的成员，在派生类可以访问。
 * 修饰符 readonly 将属性设置为只读。
 */

// 类的成员修饰符默认是 public, 也可以显式声明
class A {
  public a: string
  private b: string
  constructor(a: string, b: string) {
    this.a = a
    this.b = b
  }
  getB(): string {
    return this.b
  }
}

// static
class Rect2 {
  x: number
  y: number
  static version: number = 1
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  static getVersion() {
    return Rect2.version
  }
}

// 抽象类 不能实例化
abstract class Rect3 {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  abstract getRect(): number
}

class Cube3 extends Rect3 {
  z: number
  constructor(x: number, y: number, z: number) {
    super(x, y)
    this.z = z
  }
  getRect(): number {
    return this.x * this.y * this.z
  }
}

let cube3 = new Cube3(1, 2, 3)
console.log('cube3:', cube3.getRect())

// getter 和 setter
class Name1 {
  constructor(public first: string, public last: string) {}
  get fullName(): string {
    return `${this.first} ${this.last}`
  }
  set fullName(name: string) {
    let items = name.split(' ')
    this.first = items[0]
    this.last = items[1]
  }
}

let name1 = new Name1('foo', 'bar')
console.log(name1.fullName)

name1.fullName = 'bar foo'
console.log(name1.fullName)

/**
 * 函数
 *
 */

// 类型推断
// 省略左侧类型描述
let sum1 = function (a: number, b: number): number {
  return a + b
}
console.log(sum1(1, 2))

// 省略右侧类型描述
let sum2: (a: number, b: number) => number = function (a, b) {
  return a + b
}

// 可选参数
function foo1(a: number, b?: number): number {
  if (b) {
    return b
  } else {
    return a
  }
}
console.log(foo1(1))

// 默认参数
// 在 TS 中，默认参数的类型是：默认值和 undefined 的联合类型
function foo2(a: number, b: number = 1): number {
  return a + b
}
console.log(foo2(1))

// 剩余参数
function foo3(a: number, ...rest: number[]): number {
  return a + rest.reduce((a, b) => a + b)
}
console.log(foo3(1, 2, 3))

// 函数重载
function foo4(a: number): boolean
function foo4(a: boolean): number
function foo4(a: any): undefined

// 并不是重载，而是具体的函数声明，所以例子中只有三个函数重载
function foo4(a: any): any {
  if (typeof a === 'number') {
    return true
  }
  if (typeof a === 'boolean') {
    return 0
  }
  return undefined
}

console.log(foo4(1))
console.log(foo4(true))

/**
 * 泛型 类型变量
 *
 */

// 泛型函数
function foo5<T>(a: T): T {
  return a
}
console.log(foo5<number>(1))
console.log(
  foo5<number[]>([1, 2, 3])
)

// 泛型接口
interface iFoo<T> {
  (arg: T): T
}

// 泛型类
class Rect4<T> {
  x: T
  y: T
  constructor(x: T, y: T) {
    this.x = x
    this.y = y
  }
  getRect!: () => T
}

let rect4 = new Rect4<number>(2, 3)
rect4.getRect = function () {
  return this.x * this.y
}
console.log(rect4.getRect())
