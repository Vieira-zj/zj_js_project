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


console.log(__filename, 'DONE.');
