/**
 * Created by zhengjin on 2016/11/18.
 *
 * Compare the weather data from government and FUN api.
 *
 */
var cityList = ['101010100', '101200101'];

function mainCompareWeatherDataV1(cityId) {
    var getGovDataV1 = require('./get_gov_weather_data_v1');
    var getFunDataV1 = require('./get_fun_weather_data_v1');

    var p = new Promise(function (resolve) {
        console.log('start compare weather data Promise...');
        resolve(cityId);
    });

    p.then(getFunDataV1).then(getGovDataV1).then(function (resolve) {
        console.log(resolve.funData.length);
        console.log(resolve.GovData.length);
    }).catch(function (reason) {
        console.error(reason);
    });
}

//mainCompareWeatherDataV1(cityList[0]);

function mainCompareWeatherDataV2(cityId) {
    var getGovDataV2 = require('./get_gov_weather_data_v2');
    var getFunDataV2 = require('./get_fun_weather_data_v2');

    var pGetFunData = new Promise(function (resolve) {
        console.log('start get weather data from FUN Promise...');
        resolve(cityId);
    }).then(getFunDataV2);

    var pGetGovData = new Promise(function (resolve) {
        console.log('start get weather data from GOV Promise...');
        resolve(cityId);
    }).then(getGovDataV2);

    Promise.all([pGetFunData, pGetGovData]).then(function (result) {
        console.log(result[0].weatherData.length);
        console.log(result[1].weatherData.length);
    });
}

mainCompareWeatherDataV2(cityList[0]);
