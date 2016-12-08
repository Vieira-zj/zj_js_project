/**
 * Created by zhengjin on 2016/12/7.
 *
 * Refer to https://github.com/tj/co
 */
var co = require('co');

function timeDelay(waitTime) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Pause for " + waitTime);
        }, waitTime);
    });
}

co(function* () {
    var step1Ret = yield timeDelay(3000);
    console.log(step1Ret);
    var step2Ret = yield timeDelay(1000);
    console.log(step2Ret);
    var step3Ret = yield timeDelay(500);
    console.log(step3Ret);

    return [step1Ret, step2Ret, step3Ret];
}).then(function (value) {
    console.log(value);
}, function (err) {
    console.log(err.stack);
});

console.log(__filename, 'DONE.');
