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


function compareWeatherDataByCon(cityId) {
    console.log('Start Promise, get weather data by concurrent...');
    Promise.all([getFunDataV1(cityId), GovWeatherData.getForecastData(cityId)])
        .then(function (result) {
            console.log(result[0].length);
            console.log(result[1].length);
        }).catch(function (reason) {
            console.error(reason);
        });
}

function compareWeatherDataBySeq() {
    co(function* () {
        'use strict';
        var cityArr = ['101010100', '101200101'];

        // note: cannot use forEach() instead of for iterator
        for (var idx = 0, length = cityArr.length; idx < length; idx++) {
            let cityId = cityArr[idx];
            console.log('\n\nCOMPARE FOR: ' + cityId);

            let funWeaData = yield getFunDataV2(cityId);
            funWeaData.forEach(function (element) {
                console.log(JSON.stringify(element));
            });

            let GovWeaData = yield GovWeatherData.getForecastData(cityId);
            GovWeaData.forEach(function (element) {
                console.log(JSON.stringify(element));
            });
        }
    }).catch(function (err) {
        console.error(err);
    });
}


if (require.main === module) {
//    compareWeatherDataByCon('101010100');
    compareWeatherDataBySeq();

    console.log(__filename, 'DONE!');
}
