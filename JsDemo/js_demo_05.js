/**
 * Created by zhengjin on 2017/3/28.
 */

// demo 01, switch with express
//var getCategory = function (age) {
//    var category = '';
//    switch (true) {
//        case (isNaN(age)):
//        {
//            category = 'not an age';
//            break;
//        }
//        case (age >= 50):
//        {
//            category = 'Old';
//            break;
//        }
//        case (age <= 10):
//        {
//            category = 'Baby';
//            break;
//        }
//        default:
//        {
//            category = 'Yong';
//            break;
//        }
//    }
//    return category;
//};
//
//console.log('Category:', getCategory(35));


// demo 02, iterator, for in, for of and forEach
//var tmpArr1 = ['a', 'b', 'c'];
//tmpArr1.name = 'tmp array1';
//for (let attr in tmpArr1) {  // for attribute (array index)
//    if (tmpArr1.hasOwnProperty(attr)) {
//        console.log('for in,  element:', tmpArr1[attr]);
//    }
//}
//
//var tmpArr2 = ['m', 'n', 'p'];
//tmpArr2.name = 'tmp array2';
//for (let attr of tmpArr2) {  // for element
//    console.log('for of, tmpArr element:', attr);
//}
//
//var tmpArr3 = ['x', 'y', 'z'];
//tmpArr3.forEach(function (element, idx) {  // for index and element
//    console.log('Foreach, element:', element, 'at index:', idx);
//});


// demo 03, filter
// Note: map(), reduce() and filter() just for Array

//var tmpSet = new Set(['a', 'b', ' ', undefined, null]);
//var myArr = ['a', 'b', '  ', undefined, null];
//var tmpArr = myArr.filter(function (element) {
//    return element && element.trim();  // filter invalid and empty string
//});
//console.log('Type array:', tmpArr instanceof Array);
//console.log('Value:', tmpArr);


// demo 04, arrow function
// 1. non-fixed vars
//var myArrowFn = (x, y, ...rest) => {
//    var sum = x + y;
//    for (var i = 0, length = rest.length; i < length; i++) {
//        sum += rest[i];
//    }
//    return sum;
//};
//
//console.log('Sum:', myArrowFn(1, 9, 2, 3, 1));

// 2. this
//var myObj = {
//    birth: 1990,
//    getAge: function (year) {
//        var fn = (y) => y - this.birth;
//        return fn.call({birth: 2000}, year);
//    }
//};
//
//console.log('Age:', myObj.getAge(2015));


// demo 05, RegExp, global search
// g - global, i - ignore case
//var srcStr = 'JavaScript, VBScript, JScript and ECMAScript';
////var re = /[a-zA-Z]+cript/g;
//var re = /[a-z]+cript/gi;
//
//var myPrintLog = console.log;
//
//while (true) {
//    var tmpResult = re.exec(srcStr);
//    if (!tmpResult) {
//        break;
//    }
//    myPrintLog(tmpResult[0]);
//    myPrintLog(re.lastIndex);
//}


// demo 06, empty function
//var myEmptyFn = function () {
//    // default return undefined
//};
//console.log('myEmptyFn return:', myEmptyFn());


// demo 07, typeof
//var tmpStr = 'test';
//console.log(typeof(tmpStr) === 'string');
//
//var tmpNumber = 1;
//console.log(typeof(tmpNumber) === 'number');
//
//var tmpBool = false;
//console.log(typeof(tmpBool) === 'boolean');


// demo 08, function
//var factorial = (function f(num) {
//    if (num === 1) {
//        return 1;
//    } else {
//        return num * factorial(num - 1);
//    }
//});
//console.log('factorial:', factorial(5));
//
//function superFunc() {
//    var subFuncs = [];
//    for (var i = 0; i < 10; i++) {
//        subFuncs[i] = (function () {
//            return i;
//        })(i);
//    }
//    return subFuncs;
//}
//var fns = superFunc();
//console.log('fns instanceof Array:', fns instanceof Array);
//console.log('value:', fns);


// demo 09, keyword "this"
// #1
//function Thing() {
//}
//Thing.prototype.foo = "bar";
//Thing.prototype.logFoo = function () {
//    console.log(this.foo);
//};
//Thing.prototype.setFoo = function (newFoo) {
//    this.foo = newFoo;  // this => instance
////    this.__proto__.foo = newFoo;
//};
//
//var thing1 = new Thing();
//var thing2 = new Thing();
//
//thing1.logFoo(); //logs "bar"
//thing2.logFoo(); //logs "bar"
//
//thing1.setFoo("foo");
//thing1.logFoo(); //logs "foo";
//thing2.logFoo(); //logs "bar";
//
//thing2.foo = "foobar";
//thing1.logFoo(); //logs "foo";
//thing2.logFoo(); //logs "foobar";

// #2
//function Thing() {
//}
//Thing.prototype.foo = "bar";
//Thing.prototype.logFoo = function () {
//    var info = "attempting to log this.foo:";
//
//    function doIt() {
//        // "this" is not inherit from out_method
//        console.log(info, this.foo);
//    }
//
//    doIt();
//};
//
//var thing = new Thing();
//thing.logFoo();  //logs "attempting to log this.foo: undefined"

// #2, fix
//function Thing() {
//}
//Thing.prototype.foo = "bar";
//Thing.prototype.logFoo = function () {
//    var self = this;
//    var info = "attempting to log this.foo:";
//
//    function doIt() {
//        console.log(info, self.foo);
//    }
//
//    doIt();
//};
//
//var thing = new Thing();
//thing.logFoo();  //logs "attempting to log this.foo: bar"

// #3
//function Thing() {
//}
//Thing.prototype.foo = "bar";
//Thing.prototype.logFoo = function () {
//    console.log(this.foo);
//};
//
//function doIt(method) {
//    method();
//}
//
//var thing = new Thing();
//thing.logFoo(); //logs "bar"
//doIt(thing.logFoo); //logs undefined

// #3, fix
//function Thing() {
//}
//Thing.prototype.foo = "bar";
//Thing.prototype.logFoo = function () {
//    console.log(this.foo);
//};
//
//function doIt(method) {
//    method();
//}
//
//var thing = new Thing();
//doIt(thing.logFoo.bind(thing)); //logs bar


// #4
//var obj = {
//    foo: "bar"
//};
//
//function logFoo() {
//    console.log(this.foo);
//}
//logFoo.apply(obj);

// #5
//var obj = {
//    foo: "bar",
//    deeper: {
//        logFoo: function () {
//            console.log(this.foo);
//        }
//    }
//};
//
//obj.deeper.logFoo();


// #5, fix
//var obj = {
//    foo: "bar",
//    deeper: {
//        logFoo: function () {
//            console.log(obj.foo);
//        }
//    }
//};
//
//obj.deeper.logFoo();


// #6
//function Thing(type) {
//    this.type = type;
//}
//Thing.prototype.log = function (thing) {
//    console.log(this.type, thing);
//};
//Thing.prototype.logThings = function (arr) {
//    arr.forEach(this.log, this);
//};
//
//var thing = new Thing('fruit');
//thing.logThings(["apples", "oranges", "strawberries", "bananas"]);


// demo 10, OO inherit
//function Super() {
//}
//function Sub() {
//}
//Sub.prototype = new Super();
//
//var sub = new Sub();
//console.log('sub instanceof Sub:', sub instanceof Sub);
//console.log('sub instanceof Super:', sub instanceof Super);
//
//console.log(sub.constructor);
//console.log(sub.__proto__.constructor);
//
//console.log('sub.constructor === Sub:', sub.constructor === Sub);  // false
//console.log('sub.constructor === Super:', sub.constructor === Super);  // true
//
//console.log(sub.__proto__.__proto__ === Super.prototype);
//console.log('Super.prototype.constructor === Super:', Super.prototype.constructor === Super);
//
//console.log('Sub.prototype instanceof Super:', Sub.prototype instanceof Super);


console.log(__filename, 'DONE.');
