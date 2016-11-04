/**
 * Created by zhengjin on 2016/11/4.
 */
var Q = require('q');
var fs = require('fs');

function printFileContent(fileName) {
    var defer = Q.defer();
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (!err && data) {
            console.log(data);
            defer.resolve(fileName + ' success ');
        } else {
            defer.reject(fileName + ' fail ');
        }
    });
    return defer.promise;
}

// run concurrent
Q.allSettled([
    printFileContent('./NodeJsProject07/data/sample01.txt'),
    printFileContent('./NodeJsProject07/data/sample02.txt'),
    printFileContent('./NodeJsProject07/data/sample03.txt'),
    printFileContent('./NodeJsProject07/data/sample04.txt')])
    .then(function (results) {
        results.forEach(function (result) {
            console.log(result.state);
        })
    });
