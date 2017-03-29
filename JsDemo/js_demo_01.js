/**
 * Created by Vieira on 2016/10/19.
 */
//'use strict';

// demo 01, closure
//function count() {
//    var c = 0;
//
//    function add() {
//        return ++c;
//    }
//
//    return add;
//}
//
//var ct = count();
//console.log(ct());  // 1
//console.log(ct());  // 2


// demo 02, 'this'
//var segmentFault = {
//    name: "In ZJ",
//    getNameFunc: function () {
//        var that = this;
//        return function () {
//            return that.name;
//        };
//    }
//};
//console.log(segmentFault.getNameFunc()());

//var segmentFault = {
//    name: "In ZJ",
//    getNameFunc: function () {
//        return function () {
//            return this.name;
//        }.bind(this);
//    }
//};
//console.log(segmentFault.getNameFunc()());


// demo 03, 'this'
//var jane = {
//    name: 'Jane',
//    friends: ['Tr', 'Chee'],
//
//    logHiToFriends: function () {
//        var that = this;
//        this.friends.forEach(function (friend) {
//            console.log(that.name + 'say hi to ' + friend);
//        });
//    }
//};
//jane.logHiToFriends();

// use bind() instead of "that = this"
//var jane = {
//    name: 'Jane',
//    friends: ['Tr', 'Chee'],
//
//    logHiToFriends: function () {
//        this.friends.forEach(function (friend) {
//            console.log(this.name + 'say hi to ' + friend);
//        }.bind(this));
//    }
//};
//jane.logHiToFriends();


// demo 04, join()
//var testArr = ['hello', 'zheng', 'jin!'];
//console.log(testArr.join(' '));

// map()
//var nameArr = ['henry', 'price', 'vieira'];
//var sayHello = function (str) {
//    return 'hello ' + str;
//};
//
//console.log(nameArr.map(sayHello));

// reduce()
//var intArr = [1, 2, 3, 4];
//
//var add = function (x, y) {
//    return x + y;
//};
//var multiple = function (x, y) {
//    return x * y;
//};
//
//console.log(intArr.reduce(add));
//console.log(intArr.reduce(multiple));


// demo 05, use method
//function getText(someText) {
//    console.log(capWords(someText).join(' '));
//}
//
//function capWords(input) {
//    var inputArr = input.split(' ');
//    var transformed = '';
//    var result = [];
//
//    for (var counter = 0, length = inputArr.length; counter < length; counter++) {
//        transformed = [
//            inputArr[counter].charAt(0).toUpperCase(),
//            inputArr[counter].substring(1)
//        ].join('');
//        result.push(transformed);
//    }
//
//    return result;
//}
//
//getText('hello, vieira');


// demo 06, use object
//var SomeText = function (text) {
//    this.text = text;
//};
//
//SomeText.prototype.capify = function (str) {
//    var firstLetter = str.charAt(0);
//    var remainder = str.substring(1);
//    return [firstLetter.toUpperCase(), remainder].join('');
//};
//
//SomeText.prototype.capifyWords = function () {
//    var result = [];
//    var textArr = this.text.split(' ');
//    for (var counter = 0; counter < textArr.length; counter++) {
//        result.push(this.capify(textArr[counter]));
//    }
//    return result.join(' ');
//};
//
//var newText = new SomeText('hello, vieira');
//console.log(newText.capifyWords());


// demo 07, use map()
//var capify = function (str) {
//    return [str.charAt(0).toUpperCase(), str.substring(1)].join('');
//};
//
//var processWords = function (fn, str) {
//    return str.split(' ').map(fn).join(' ');
//};
//
//console.log(processWords(capify, 'hello, vieira'));


// demo 08, hasOwnProperty()
//function Person(name, age) {
//    this.name = name;
//    this.age = age;
//}
//
//Person.prototype.getInfo = function () {
//    console.log(this.name + " is " + this.age + " years old.");
//};
//
//var will = new Person('Will', 28);
//will.getInfo();
//for (var attr in will) {
//    if (will.hasOwnProperty(attr)) {
//        console.log(attr);
//    }
//}


// demo 09, closure
//for (var i = 0; i < 5; i++) {
//    setTimeout(function () {
//        console.log(i);
//    }, 5)
//}
//
//for (var i = 0; i < 5; i++) {
//    (function (idx) {
//        setTimeout(function () {
//            console.log(idx);
//        }, 2);
//    })(i);
//}


// demo 10, bind object
//var myObject = {value: 100};
//var foo = function () {
//    console.log(this);
//};
//
//foo();  // undefined
//foo.apply(myObject);  // { value: 100 }
//foo.call(myObject);  // { value: 100 }
//
//var newFoo = foo.bind(myObject);
//newFoo();  // { value: 100 }


// demo 11, function area, and there is no code block area
//function foo() {
//    for (var i = 0; i < 3; i++) {
//        var value = 'hello world';
//    }
//    console.log(i);
//    console.log(value);
//}
//
//foo();
//console.log(i);  // not define


// demo 12
//var str = ' add ';
//(function (input) {
//    'use strict';
//    var x = 10,
//        y = 100;
//    console.log(x + input + y);
//}(str));

//(function (input) {
//    var x = 10,
//        y = 100;
//    console.log(x + input + y);
//})(str);


// demo 13, object to string
//var jsonObj = {
//    'title': 'title test',
//    'content': 'content test'
//};
//
//console.log(jsonObj.title);
//console.log(jsonObj['title']);
//console.log(JSON.stringify(jsonObj));

// str to object
//var str = '{ "name": "Violet", "occupation": "character" }';
//var jsonObj = JSON.parse(str);
//console.log(jsonObj.name);
//console.log(jsonObj['occupation']);


// demo 14
//(function () {
//    var arr = ['a', 'b', 'c'];
//    arr.name = 'array';
//    for (var ele in arr) {  // index
//        if (arr.hasOwnProperty(ele)) {
//            console.log(ele);
//        }
//    }
//})();

//(function () {
//    var arr = ['a', 'b', 'c'];
//    arr.forEach(function (element, index) {
//        console.log(index + ' -> ' + element);
//    });
//})();


// demo 15, lambda
//var arr = [1, 2, 3, 4];
//console.log(arr.map(x => x + x));
//console.log(arr.reduce((x, y) => x + y));
//console.log(arr.reduce((x, y) => {return x + y}));

//var helloMeg = (message) => {
//    console.log('Hello, ' + message);
//};
//helloMeg('ZhengJin');


// demo 16, prototype object
//function Student(name, age) {
//    this.name = name;
//    this.age = age;
//}
//var xiaoming = new Student('XiaoMing', 20);
//Student.prototype.school = 'No.1 Middle School';

//var xiaoming = {
//    name: 'XiaoMing',
//    age: 20
//};
//xiaoming.__proto__.school = 'No.1 Middle School';
//
//for (var p in xiaoming) {
//    if (xiaoming.hasOwnProperty(p)) {
//        console.log(p);
//    }
//}


// demo 17, set default value
//(function (passed, first, second) {
//    var fName = first || 'Null',
//        sName = second || 'Null',  // if not exist, set default
//        result = passed && true;  // if exist, set default
//    console.log('Your first name: ' + fName + ', and second name: ' + sName + ', pass: ' + result);
//})('pass', 'zheng');


// demo 18, print format
//var name = 'ZHENG JIN';
//console.log('Hello, %s', name);
//
//var x = 3;
//var y = 5;
//console.log('%d + %d = %d', x, y, (x + y));

//'use strict';
//let firstName = 'ZHENG';
//let lastName = 'JIN';
//console.log('Hello, ${firstName} ${lastName}!');

//var util = require('util');
//console.log(util.format('Hello, %s', name));
//console.log(util.format('%d + %d = %d', x, y, (x + y)));


// demo 19, fn var
//var add = function (x, y) {
//    return x + y;
//};
//console.log(add(1, 2));
//
//add_v2 = add;
//console.log(add_v2(3, 4));
//
//
//function multiple(a, b) {
//    return a * b;
//}
//multiple_v2 = multiple;
//console.log(multiple_v2(2, 2));


// demo 20, let
//(function () {
//    "use strict";
//    var fnArr = [];
//
////    for (var idx = 0; idx < 10; idx++) {
////        fnArr[idx] = function () {
////            console.log(idx);
////        }
////    }
////    fnArr[8]();
//
//    // use let instead of var
//    for (let idx = 0; idx < 10; idx++) {
//        fnArr[idx] = function () {
//            console.log(idx);
//        }
//    }
//    fnArr[8]();
//    console.log(idx);  // error, not defined
//})();


// demo 21, length
//var tmpStr = 'hello world';
//console.log(tmpStr.length);

//var tmpArr = ['beijing', 'shanghai'];
//console.log(tmpArr.length);


// demo 22, cn words
//var cnStr = '中国';
//console.log(escape(cnStr));


// demo 23, access invalid array element
//var tmpArr = [];
//console.log(tmpArr[1]);
//console.log(tmpArr[-1]);


console.log(__filename, 'DONE.');
