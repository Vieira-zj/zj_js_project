/**
 * Created by zhengjin on 2016/12/8.
 */

// demo 01, date
//var myDate = new Date();
//console.log('cur date: %d-%d-%d', myDate.getFullYear(), myDate.getMonth()+1, myDate.getDate());
//console.log('cur date:', [myDate.getFullYear(), myDate.getMonth()+1, myDate.getDate()].join('-'));

//console.log(myDate.getDate());
//console.log(myDate.getDay());


// demo 02, convert
//var tmpInt = 5;
//var tmpStr = String(tmpInt);
//console.log(typeof tmpStr);

//var tmpStr = '5';
//var tmpInt = parseInt(tmpStr);
//console.log(typeof tmpInt);

//var tmpStr = '';
//console.log(tmpStr.length);


// demo 03, RegExp
//var tmpStr = '-2';
//var tmpStr = '-2℃';
//var re = /-?[0-9]+/;

//var tmpStr = '低温 -2℃';
//var tmpStr = '-2';
//var re = /(-?\d+)℃?/;

//var tmpStr = '(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{{BeiJing}}%22)%20and%20u%3D%22c%22';
//var re = /{{(.+)}}/;

//var tmpStr = '2016-1-28';
//var re = /\d{4}-\d{1,2}-\d{1,2}/;

//var tmpStr = '101010100';
//var re = /\d{9}/;

//var tmpStr = '';
//var re = /\d{1,3}|\s*/;

//console.log(re.exec(tmpStr));


// demo 04, exit
//var tmpFlag = false;
//if (tmpFlag) {
//    console.log('true');
//} else {
//    console.log('false and return');
//    return;
//}


// demo 05, path module
//var path = require('path');
//
//var tmpPath = path.join(__dirname, 'js_demo_04.js');
//console.log(tmpPath);


// demo 06, foreach
//var tmpArr = ['Java', 'C++', 'Python'];
//
//tmpArr.forEach(function (ele) {
//    console.log(ele);
//});
//
//tmpArr.forEach(function (ele, idx) {
//   console.log(ele + ' at position ' + idx);
//});


// demo 07, replace
//var tmpStr = '2016/12/29';
//console.log(tmpStr.replace(new RegExp('/', 'gm'), '-'));


//demo 08, json validate
//var tmpJsonObj = {
//    data: {
//        cityId: '0001',
//        city: 'wuhan'
//    }
//};
//
//var data = tmpJsonObj.data;
//
//if (!data.cityId) {
//    console.log('City id is un-define.');
//}
//
//// error
////var tmpCity = data.cityId;
////if (tmpCity) {
////    tmpCity = '0002';
////}
//// correct
//if (data.cityId) {
//    data.cityId = '0002';
//}
//
//console.log(JSON.stringify(tmpJsonObj));


// demo 09, json validate
////var tmpJsonObj = {
////    data: null
////};
//
////var tmpJsonObj = {
////    data: {
////        city: 'wuhan'
////    }
////};
//
//var tmpJsonObj = {
//    data: {
//        cityId: '0001',
//        city: 'wuhan'
//    }
//};
//
//var logCityId = function (tmpJsonObj) {
//    if (tmpJsonObj.data) {
//        if (tmpJsonObj.data.cityId) {
//            console.log('City id: ' + tmpJsonObj.data.cityId);
//        }
//    }
//};
//
//console.log(JSON.stringify(tmpJsonObj));
//logCityId(tmpJsonObj);


// demo 10, fn define, lambda
//function myPrint(text) {
//    console.log('Value: ' + text);
//}
//
//var myPrintRef = myPrint;
//myPrintRef('test');
//
//var tmpArr = ['test1', 'test2', 'test3'];
//tmpArr.forEach(myPrintRef);
//
//tmpArr.forEach((x, y) => {
//    console.log('Value: ' + x);
//    console.log('Position at: ' + y)
//});


// demo 11, time with random
//var getRandom = function (range) {
//    var tmpRandom = Math.round(Math.random() * range);
//    if (tmpRandom === 10) {
//        return 0;
//    }
//    return tmpRandom;
//
//};
//
//var myTime = new Date().getTime();
//console.log('Current time: ' + (myTime + getRandom(10)).toString());


// demo 12, return from callback
//var flagTest = false;
//
//var myCallback = function (myFlag) {
//    setTimeout(function () {
//        if (!myFlag) {
//            console.log('False, return from callback.');
//            return;
//        }
//        console.log('True, run end.')
//    }, 1000);
//};
//
//myCallback(flagTest);


// demo 13, array, push/pop, shift/unshift
// from bottom
//var tmpArrPush = [];
//tmpArrPush.push('a');
//tmpArrPush.push('b');
//tmpArrPush.push('c');
//console.log('Push: ' + tmpArrPush);
//
//tmpArrPush.pop();
//console.log('Pop: ' + tmpArrPush);
//
//// from top
//var tmpArrShift = [];
//tmpArrShift.unshift('a');
//tmpArrShift.unshift('b');
//tmpArrShift.unshift('c');
//console.log('Unshift: ' + tmpArrShift);
//
//tmpArrShift.shift();
//console.log('Shift: ' + tmpArrShift);


// demo 14, functional program
//const isKitten = cat => cat.months < 7;
//const getName = cat => cat.name;
//const getKittenNames = cats => cats.filter(isKitten).map(getName);
//
//const cats = [
//    { name: 'Mojo', months: 84 },
//    { name: 'Mao-Mao', months: 34 },
//    { name: 'Waffles', months: 4 },
//    { name: 'Pickles', months: 6 }
//];
//
//const kittens = getKittenNames(cats);
//console.log(kittens);


// demo 15, prototype, __proto__
//var Person = function() {};
//Person.prototype.type = 'Person';
//Person.prototype.maxAge = 100;
//
//var p = new Person();
//p.name = 'rainy';
//console.log(p.maxAge);
//
//console.log(Person.prototype.constructor === Person);
//console.log(p.__proto__ === Person.prototype);


// demo 16, Function object, prototype chain
//var MyObj = function() {};
//var o = new MyObj();
//
//console.log('instance.__proto__ = Constructor.prototype = prototype_object =>');
//console.log(o.__proto__ === MyObj.prototype);
//console.log('prototype_object.constructor = Constructor =>');
//console.log(o.__proto__.constructor === MyObj);
//
//// Function object
//// Constructor is a Function
//console.log('MyObj: Constructor.__proto__ = Function.prototype = prototype_object =>');
//console.log(MyObj.__proto__ === Function.prototype);
//console.log('prototype_object.constructor = Constructor =>');
//console.log(MyObj.__proto__.constructor === Function);
//
//console.log('Object: Constructor.__proto__ = Function.prototype = prototype_object =>');
//console.log(Object.__proto__ === Function.prototype);
//console.log('prototype_object.constructor = Constructor =>');
//console.log(Object.__proto__.constructor === Function);
//
//console.log('Function: Constructor.__proto__ = Function.prototype = prototype_object =>');
//console.log(Function.__proto__ === Function.prototype);
//console.log('prototype_object.constructor = Constructor =>');
//console.log(Function.__proto__.constructor === Function);
//
//// prototype object chain
//// Root object: Object
//// 'prototype': find related prototype object
//// '__proto__': find super prototype object
//console.log('MyObj_prototype_object.__proto__ = Object_prototype_object =>');
//console.log(MyObj.prototype.__proto__ === Object.prototype);
//console.log('o_instance.__proto__.__proto__ = Object_prototype_object =>');
//console.log(o.__proto__.__proto__ === Object.prototype);
//console.log('Function_prototype_object.__proto__ = Object_prototype_object =>');
//console.log(Function.prototype.__proto__ === Object.prototype);
//console.log('Object_prototype_object.__proto__ = null =>');
//console.log(Object.prototype.__proto__ === null);
//
//// instanceof
//console.log('o instanceof MyObj => ' + String(o instanceof MyObj));
//console.log('o instanceof Object => ' + (o instanceof Object ? 'true' : 'false'));
//console.log('o instanceof Function => ' + (o instanceof Function ? 'true' : 'false'));


// demo 17, OO inherit
//function SuperType() {
//    this.property = 'super';
//    this.colors = ['red', 'green', 'blue'];
//}
//SuperType.prototype.getSuperValue = function () {
//    return this.property;
//};
//
//function SubType() {
//    this.subProperty = 'sub';
//}
//// the order for below 2 statements can NOT change
//SubType.prototype = new SuperType();
//SubType.prototype.getSubValue = function () {
//    return this.subProperty;
//};
//
//var instance = new SubType();
//console.log(instance.getSubValue());
//console.log(instance.getSuperValue());
//
//console.log(instance instanceof SubType);
//console.log(instance instanceof SuperType);
//console.log(instance instanceof Object);
//
//
//// prototype chain check
//console.log(instance.__proto__ === SubType.prototype);
//console.log('SubType_prototype_object.__proto__ = SuperType_prototype_object =>');
//console.log(instance.__proto__.__proto__ === SuperType.prototype);
//console.log(SubType.prototype.__proto__ === SuperType.prototype);
//
//
//// 1. update instance var which is reference
//instance.colors.push('black');
//console.log(instance.colors);
//
//// 2. change is applied to another SupType instance
//var instance1 = new SubType();
//console.log(instance1.colors);
//
//// 3. SuperType instance is not changed
//var instance2 = new SuperType();
//console.log(instance2.colors);
//
//console.log('SubType_prototype_object is an instance of SuperType =>');
//console.log(instance.__proto__ instanceof SuperType);


// demo 18, "this" in "=>function"
//function Foo() {
//    var that = this;
//    this.arrow = () => {
//        console.log(this.name);
//    };
//    this.simulationArrow = () => {
//        console.log(that.name);
//    };
//    this.common = function () {
//        console.log(this.name);
//    };
//    this.commonBind = function () {
//        console.log(this.name);
//    }.bind(this);
//}
//
//var f = new Foo();
//f.name = 'foo';
//name = 'global';
//
//arrow = f.arrow;
//simulationArrow = f.simulationArrow;
//common = f.common;
//commonBind = f.commonBind;
//
//arrow();
//simulationArrow();
//common();
//commonBind();


// demo 19, "this" in "=>function"
//var tmpObj = {
//    foo: 'test',
//    bar: function () {
//        console.log(this.foo);
//    },
////    arrow: () => {console.log(this.foo);}
//    arrow: () => console.log(this.foo)
//};
//
//tmpObj.bar();
//tmpObj.arrow();


console.log(__filename, 'DONE.');
