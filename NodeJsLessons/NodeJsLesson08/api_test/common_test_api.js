/**
 * Created by zhengjin on 2016/12/9.
 */
var util = require('util');

var getCurrentDate = function () {
    var myDate = new Date();
    return util.format('%d-%d-%d', myDate.getFullYear(), myDate.getMonth() + 1, myDate.getDate());
};

var timeDelay = function (waitTime) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Pause for ' + waitTime);
        }, waitTime);
    });
};

module.exports = {
    getCurrentDate: getCurrentDate,
    timeDelay: timeDelay
};


if (require.main === module) {
    console.log(__filename, 'DONE.');
}
