/**
 * Created by zhengjin on 2016/11/14.
 */

// demo 01, promise
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


// demo 02, promise, multiple then
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


// demo 03, promise
//var p1 = new Promise(function (resolve, reject) {
//    setTimeout(resolve, 700, 'P1');
//});
//
//var p2 = new Promise(function (resolve, reject) {
//    setTimeout(resolve, 500, 'P2');
//});
//
//// run p1 and p2, and exec then after both p1 and p2 done
//Promise.all([p1, p2]).then(function (results) {
//    console.log(results);
//});
//
//// run p1 and p2, and exec then when p1 or p2 done
//Promise.race([p1, p2]).then(function (results) {
//    console.log(results);
//});


// demo 04, generator
//function* Add(x) {
//    yield x + 1;
//    yield(null);
//    var y = 6;
//    return x + y;
//}
//
//function* Add(x) {
//    yield x + 1;
//    var y = yield null;
//    return x + y;
//}
//
//var gen = Add(5);
//console.log(gen.next());
//console.log(gen.next(5));
//console.log(gen.next());


// demo 05, generator
//function timeDelay(waittime, callback) {
//    setTimeout(function () {
//        callback("Pause for " + waittime);
//    }, waittime);
//}

// method1: callbacks
//timeDelay(3000, function (message) {
//    console.log(message);
//    timeDelay(1000, function (message) {
//        console.log(message);
//        timeDelay(500, function (message) {
//            console.log(message)
//        })
//    })
//});

// method2: generate



console.log(__filename, 'DONE.');
