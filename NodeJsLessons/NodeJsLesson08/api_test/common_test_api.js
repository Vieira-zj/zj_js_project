/**
 * Created by zhengjin on 2016/12/9.
 */
var util = require('util');
var fs = require('fs');

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

var cityType = {
    byId: 0,
    byNameCn: 1,
    byNameEn: 2,
    byName: 3
};

var getCityList = function (filePath, type) {
    var cities = [];

    var content = fs.readFileSync(filePath, 'utf8');
    content.split('\r\n').forEach(function (element, idx) {
        var cityFields = element.split(',');
        if (type === cityType.byName) {
            cities.push({
                nameCn: cityFields[cityType.byNameCn],
                nameEn: cityFields[cityType.byNameEn]
            });
        } else {
            cities.push(cityFields[type]);
        }
    });
    return cities;
};


module.exports = {
    timeDelay: timeDelay,
    cityType: cityType,
    getCurrentDate: getCurrentDate,
    getCityList: getCityList
};


if (require.main === module) {
    console.log(__filename, 'DONE.');
}
