/**
 * Created by zhengjin on 2016/11/4.
 *
 * Promise demo 04
 *
 */
var Q = require('q');
var fs = require('fs');
var defer = Q.defer();

function getInputPromise() {
    return defer.promise;
}

var outputPromise = getInputPromise().then(function (fulfilled) {
    var myDefer = Q.defer();
    fs.readFile('./NodeJsProject06/data.txt', 'utf8', function (err, data) {
        if (!err && data) {
            myDefer.resolve(data);
        }
    });
    return myDefer.promise;
}, function (reject) {
    throw new Error('rejected');
});

outputPromise.then(function (fulfilled) {
    console.log(fulfilled);
}, function (rejected) {
    console.log(rejected);
});

//defer.resolve();  // output: the content of file
defer.reject();  // output: [Error: rejected]
