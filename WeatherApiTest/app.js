/**
 * Created by zhengjin on 2016/11/18.
 *
 * Compare the weather data from government and FUN api.
 *
 */

var co = require('co');

var getFunDataV1 = require('./get_fun_weather_data_v1');
var getFunDataV2 = require('./get_fun_weather_data_v2');
var GovWeatherData = require('./get_gov_weather_data');

var cityArr = ['101010100', '101020100', '101030100', '101040100', '101200101'];

var compareWeatherDataByCon = function (cityId) {
    console.log('Start Promise, compare weather data by concurrent...');
    Promise.all([getFunDataV1(cityId), GovWeatherData.getForecastData(cityId)])
        .then(function (result) {
            console.log(result[0].length);
            console.log(result[1].length);
            console.log('\nCOMPARE DONE!');
        }).catch(function (reason) {
            console.error(reason);
        });
};

var compareForecastWeatherDataBySeq = function () {
    co(function* () {
        'use strict';
        var cityArrTest = cityArr;

        // note: cannot use forEach() instead of for iterator
        for (let idx = 0, length = cityArrTest.length; idx < length; idx++) {
            let cityId = cityArrTest[idx];
            console.log('\n\nCOMPARE FORECAST WEATHER DATA FOR: ' + cityId);

            let funWeaData = yield getFunDataV2(cityId);
            funWeaData.forecast.forEach(function (element) {
                console.log(JSON.stringify(element));
            });

            let govWeaData = yield GovWeatherData.getForecastData(cityId);
            govWeaData.forEach(function (element) {
                console.log(JSON.stringify(element));
            });
        }

        console.log('\nCOMPARE DONE!');
    }).catch(function (err) {
        console.error(err);
    });
};

var compareTodayWeatherDataBySeq = function () {
    co(function* () {
        'use strict';
        var cityArrTest = ['101010100'];

        for (let idx = 0, length = cityArrTest.length; idx < length; idx++) {
            let cityId = cityArrTest[idx];
            console.log('\n\nCOMPARE TODAY WEATHER DATA FOR: ' + cityId);

            let funWeaData = yield getFunDataV2(cityId);
            console.log(JSON.stringify(funWeaData.today));

            let govWeaData = yield GovWeatherData.getTodayData(cityId);
            govWeaData.forEach(function (element) {
                console.log(JSON.stringify(element));
            });
        }

        console.log('\nCOMPARE DONE!');
    }).catch(function (err) {
        console.error(err);
    });
};


if (require.main === module) {
//    compareWeatherDataByCon('101010100');
//    compareForecastWeatherDataBySeq();
    compareTodayWeatherDataBySeq();
}
