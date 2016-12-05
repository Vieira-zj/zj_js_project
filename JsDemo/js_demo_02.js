//'use strict';

/**
 * Created by zhengjin on 2016/10/26.
 */

// demo 01, prototype
//function Thing() {
//}
//
//Thing.prototype.foo = 'bar';
//Thing.prototype.logFoo = function () {
//    console.log(this.foo);
//};
//Thing.prototype.setFoo = function (newFoo) {
//    this.foo = newFoo;
//};
//Thing.prototype.deleteFoo = function () {
//    delete this.foo;
//};
//
//var thing1 = new Thing();
//var thing2 = new Thing();
//
//thing1.logFoo();
//thing2.logFoo();
//console.log(Thing.prototype.foo + '\n');
//
//thing1.setFoo('foo');
//thing1.logFoo();
//thing2.logFoo();
//console.log(Thing.prototype.foo + '\n');
//
//thing2.foo = 'foobar';
//thing1.logFoo();
//thing2.logFoo();
//console.log(Thing.prototype.foo + '\n');
//
//thing1.deleteFoo();
//thing1.logFoo();
//console.log(Thing.prototype.foo + '\n');


// demo 02, prototype
//function Thing() {
//}
//
//Thing.prototype.foo = 'bar';
//Thing.prototype.logFoo = function () {
//    console.log(this.foo + '\n' + Thing.prototype.foo);
//};
//
//var thing = new Thing();
//thing.foo = 'foo';
//thing.logFoo();


// demo 03, prototype
//function Thing1() {
//}
//Thing1.prototype.foo = 'bar';
//
//function Thing2() {
//}
//Thing2.prototype = new Thing1();
//
//Thing2.prototype.logFoo = function () {
//    console.log(this.foo);
//};
//
//var thing = new Thing2();
//thing.logFoo();
//console.log(thing.foo);


// demo 04, context
//function Thing() {
//}
//Thing.prototype.foo = 'bar';
//Thing.prototype.logFoo = function () {
//    console.log(this.foo);
//};
//
//function doIt(method) {
//    method();
//}
//
//var thing = new Thing();
//doIt(thing.logFoo);  // undefined
//doIt(thing.logFoo.bind(thing));


// demo 05, context, bind
//function Thing() {
//}
//Thing.prototype.foo = 'bar';
//
//function logFoo(aStr) {
//    console.log(aStr, this.foo);
//}
//
//var thing = new Thing();
//logFoo.bind(thing)('using bind');
//logFoo.apply(thing, ['using apply']);
//logFoo.call(thing, 'using call');


// demo 06, context, with
//function Thing() {
//}
//Thing.prototype.foo = 'bar';
//Thing.prototype.logFoo = function () {
//    with (this) {
//        console.log(foo);
//        foo = 'foo';
//    }
//};
//
//var thing = new Thing();
//thing.logFoo();
//console.log(thing.foo);
//console.log(Thing.prototype.foo);


// demo 07, context
//function Thing(type) {
//    this.type = type;
//}
//Thing.prototype.log = function (aStr) {
//    console.log(this.type, aStr);
//};
//Thing.prototype.logThings = function (arr) {
////    arr.forEach(this.log);
//    arr.forEach(this.log, this);
//};
//
//var thing = new Thing("fruit");
//thing.logThings(['apples','orange','banana']);


// demo 08, generator
// method 1: function, return array
//function fib(max) {
//    var t,
//        a = 0,
//        b = 1,
//        arr = [0, 1];
//
//    while (arr.length < max) {
//        t = a + b;
//        a = b;
//        b = t;
//        arr.push(t);
//    }
//
//    return arr;
//}
//
//console.log(fib(10));


// method 2: generator, return each value
//function* fib(max) {
//    var t,
//        a = 0,
//        b = 1,
//        n = 1;
//
//    while (n < max) {
//        yield a;
//        t = a + b;
//        a = b;
//        b = t;
//        n++;
//    }
//
//    return a;
//}

//var fn = fib(5);
//console.log(fn.next());
//console.log(fn.next());
//console.log(fn.next());
//console.log(fn.next());
//console.log(fn.next());

//for (var x of fib(5)) {
//    console.log(x);
//}


// method 3: object, keep status via instance properties
//var fib = {
//    a: 0,
//    b: 1,
//    n: 0,
//    max: 5,
//    next: function () {
//        var r = this.a,
//            t = this.a + this.b;
//        this.a = this.b;
//        this.b = t;
//        if (this.n < this.max) {
//            this.n++;
//            return r;
//        } else {
//            return undefined;
//        }
//    }
//};
//
//console.log(fib.next());
//console.log(fib.next());
//console.log(fib.next());
//console.log(fib.next());
//console.log(fib.next());


// demo 09, RegExp
//var re = new RegExp('^\\d{3}\\-\\d{3,8}$');
//var re = /^\d{3}\-\d{3,8}$/;
//console.log(re.test('010-12345'));
//console.log(re.test('010-1234x'));
//console.log(re.test('010 12345'));

// RegExp in split()
//console.log('a b   c'.split(/\s+/));
//console.log('a,b, c,   d'.split(/[\s\,]+/));


// RegExp, group
//var re = /^(\d{3})\-(\d{3,8})$/;
//console.log(re.exec('010-12345'));
//console.log(re.exec('010 12345'));  // null


//var re = /^(\d+)(0*)$/;
//console.log(re.exec('102300'));
//var re = /^(\d+?)(0*)$/;
//console.log(re.exec('102300'));


// gloal search
//var s = 'JavaScript, VBScript, JScript and ECMAScript';
//var re = /[a-zA-Z]+cript/g;
//console.log(re.exec(s));
//console.log(re.lastIndex);
//console.log(re.exec(s));
//console.log(re.lastIndex);


// demo 10, inherit by prototype
// step1: define object
//function Student(props) {
//    this.name = props.name || 'Unnamed';
//}
//Student.prototype.hello = function () {
//    console.log('Hello ' + this.name + '!');
//};
//
//function PrimaryStudent(props) {
//    Student.call(this, props);
//    this.grade = props.grade || 1;
//}
//
//// step2: define inherit relationship
//// method 01
////function F() {
////}
////F.prototype = Student.prototype;
////PrimaryStudent.prototype = new F();
////PrimaryStudent.prototype.constructor = PrimaryStudent;
//
//// method 02
//function inherits(Child, Parent) {
//    var F = function () {
//    };
//    F.prototype = Parent.prototype;
//    Child.prototype = new F();
//    Child.prototype.constructor = Child;
//}
//inherits(PrimaryStudent, Student);
//
//// step3: run
//PrimaryStudent.prototype.getGrade = function () {
//    return this.grade;
//};
//
//var xiaoming = new PrimaryStudent({
//    name: 'XiaoMing',
//    grade: 2
//});
//xiaoming.hello();
//console.log(xiaoming.getGrade());
//
//console.log(xiaoming.__proto__ === PrimaryStudent.prototype);
//console.log(xiaoming.__proto__.__proto__ === Student.prototype);
//
//console.log(xiaoming instanceof PrimaryStudent);
//console.log(xiaoming instanceof Student);


// demo 11, inherit by class
//'use strict';
//class Student {
//    constructor(name) {
//        this.name = name;
//    }
//
//    hello() {
//        console.log('Hello, ' + this.name + '!');
//    }
//}
//
//class PrimaryStudent extends Student {
//    constructor(name, grade) {
//        super(name);
//        this.grade = grade;
//    }
//
//    myGrade() {
//        console.log('I am at grade ' + this.grade);
//    }
//}
//
//var xiaoming = new PrimaryStudent('XiaoMing', 2);
//xiaoming.hello();
//xiaoming.myGrade();
//console.log(xiaoming instanceof PrimaryStudent);
//console.log(xiaoming instanceof Student);


console.log(__filename, 'DONE.');
