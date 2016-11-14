/**
 * Created by zhengjin on 2016/11/14.
 */

// demo 01, Promise
//function test(resolve, reject) {
//    var timeOut = Math.random() * 2;
//    console.log('set timeout to: ' + timeOut + ' seconds.');
//
//    setTimeout(function () {
//        if (timeOut < 1) {
//            console.log('call resolve()...');
//            resolve('200 OK');
//        } else {
//            console.log('call reject()...');
//            reject('timeout in ' + timeOut + ' seconds.');
//        }
//    }, timeOut * 1000);
//}
//
//// then == resolve, catch == reject
//new Promise(test).then(function (result) {
//    console.log('pass：' + result);
//}).catch(function (reason) {
//    console.log('failed: ' + reason);
//});


// demo 02, Promise, sync instead of async
//function multiply(input) {
//    return new Promise(function (resolve, reject) {
//        console.log('calculating ' + input + ' * ' + input + '...');
//        setTimeout(resolve, 500, input * input);
//    })
//}
//
//function add(input) {
//    return new Promise(function (resolve, reject) {
//        console.log('calculating ' + input + ' + ' + input + '...');
//        setTimeout(resolve, 500, input + input);
//    });
//}
//
//var p = new Promise(function (resolve, reject) {
//    console.log('start new Promise...');
//    resolve(2);
//});
//
//p.then(multiply).then(add).then(multiply).then(add).then(function (result) {
//   console.log('Got value: ' + result);
//});


// demo 03, Promise, async
//var p1 = new Promise(function (resolve, reject) {
//    setTimeout(resolve, 700, 'P1');
//});
//
//var p2 = new Promise(function (resolve, reject) {
//    setTimeout(resolve, 500, 'P2');
//});
//
//Promise.all([p1, p2]).then(function (results) {
//    console.log(results);
//});
//
//Promise.race([p1, p2]).then(function (results) {
//    console.log(results);
//});


console.log('DONE.');
