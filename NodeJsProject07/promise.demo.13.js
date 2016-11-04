/**
 * Created by zhengjin on 2016/11/4.
 */
var Q = require('q'),
    fs = require('fs');

function printFileContent(fileName) {
    return function () {
        var defer = Q.defer();
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (!err && data) {
                console.log(data);
                defer.resolve();
            }
        });
        return defer.promise;
    }
}

// run in sequence
printFileContent('./NodeJsProject07/data/sample01.txt')()
    .then(printFileContent('./NodeJsProject07/data/sample02.txt'))
    .then(printFileContent('./NodeJsProject07/data/sample03.txt'))
    .then(printFileContent('./NodeJsProject07/data/sample04.txt'));
