/**
 * Created by zhengjin on 2016/10/26.
 */
//'use strict';

// demo 01
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
//
//thing1.setFoo('foo');
//thing1.logFoo();
//thing2.logFoo();
//
//thing2.foo = 'foobar';
//thing1.logFoo();
//thing2.logFoo();
//
//thing1.deleteFoo();
//thing1.logFoo();


// demo 02
//function Thing() {
//}
//
//Thing.prototype.foo = 'bar';
//Thing.prototype.logFoo = function () {
//    console.log(this.foo, Thing.prototype.foo);
//};
//
//var thing = new Thing();
//thing.foo = 'foo';
//thing.logFoo();


// demo 03
//function Thing1() {
//}
//Thing1.prototype.foo = 'bar';
//
//function Thing2() {
//}
//Thing2.prototype = new Thing1();
//
//var thing = new Thing2();
//console.log(thing.foo);


// demo 04
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
//doIt(thing.logFoo.bind(thing));


// demo 05
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


// demo 06
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


// demo 07
//function Thing(type) {
//    this.type = type;
//}
//Thing.prototype.log = function (aStr) {
//    console.log(this.type, aStr);
//};
//Thing.prototype.logThings = function (arr) {
//    arr.forEach(this.log, this);
//};
//
//var thing = new Thing("fruit");
//thing.logThings(['apples','orange','banana']);


// demo 08, Generator
// method 1: function
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

// method 2: generator
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

// method 3: object, keep status via properties
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


//