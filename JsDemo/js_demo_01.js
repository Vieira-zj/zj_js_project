/**
 * Created by Vieira on 2016/10/19.
 */
//'use strict';

// demo 01
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
//console.log(ct());
//console.log(ct());


// demo 02
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


// demo 03
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


// demo 04, use bind() instead of "that = this"
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


// demo 05
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
//    console.log(this.name + " is " + this.age + " years old");
//};
//
//var will = new Person('Will', 28);
//for (var attr in will) {
//    if (will.hasOwnProperty(attr)) {
//        console.log(attr);
//    }
//}


// demo 09
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


// demo 10, create class
//var SomeClass = function () {
//    this.value = 100;
//};
//var myCreate = new SomeClass();
//console.log(myCreate.value);


// demo 11
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


// demo 12, function area, and there is no code block area
//function foo() {
//    for (var i = 0; i < 3; i++) {
//        var value = 'hello world';
//    }
//    console.log(i);
//    console.log(value);
//}
//
//foo();


// demo 13
//var str = ' add ';
//(function (str) {
//    'use strict';
//    var x = 10,
//        y = 100;
//    console.log(x + str + y);
//}(str));


// demo 14, json parse
//var obj = {
//    'title': 'title test',
//    'content': 'content test'
//};
//
//console.log(obj.title);
//console.log(obj['title']);
//
//var str = '{ "name": "Violet", "occupation": "character" }';
//var obj = JSON.parse(str);
//console.log(obj.name);
//console.log(obj['occupation']);


// demo 15
//(function () {
//    var arr = ['a', 'b', 'c'];
//    arr.name = 'array';
//    for (var ele in arr) {
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
//}());


// demo 16
//var arr = [1, 2, 3, 4];
//console.log(arr.map(x => x + x));
//console.log(arr.reduce((x, y) => x + y));


// demo 17
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

//for (var p in xiaoming) {
//    if (xiaoming.hasOwnProperty(p)) {
//        console.log(p);
//    }
//}


// demo 18
//(function (passed, first, second) {
//    var fName = first || 'Null',
//        sName = second || 'Null',  // if not exist, set default
//        result = passed && true;  // if exist, set default
//    console.log('Your first name: ' + fName + ', and second name: ' + sName + ', pass: ' + result);
//})('pass', 'zheng');


// demo 19
//var name = 'ZHENG JIN';
//console.log('Hello, %s', name);
//
//var x = 3;
//var y = 5;
//console.log('%d + %d = %d', x, y, (x + y));


// demo 20
//var add = function (x, y) {
//    return x + y;
//};
//console.log(add(1, 2));
//add_v2 = add;
//console.log(add_v2(3, 4));
//
//function multiple(a, b) {
//    return a * b;
//}
//multiple_v2 = multiple;
//console.log(multiple_v2(2, 2));


console.log('DONE.');
