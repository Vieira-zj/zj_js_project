/**
 * Created by zhengjin on 2016/11/18.
 *
 * Compare the weather data from government and FUN api.
 *
 */
function getWeatherDataBySeq(cityId) {
    var getGovDataV1 = require('./get_gov_weather_data_v1');
    var getFunDataV1 = require('./get_fun_weather_data_v1');

    console.log('Start Promise, get weather data by seq...');
    getFunDataV1(cityId).then(getGovDataV1).then(function (resolve) {
        console.log(resolve.funData.length);
        console.log(resolve.GovData.length);
    }).catch(function (reason) {
        console.error(reason);
    });
}

function getWeatherDataByCon(cityId) {
    var getGovDataV2 = require('./get_gov_weather_data_v2');
    var getFunDataV2 = require('./get_fun_weather_data_v2');

    console.log('Start Promise, get weather data by concurrent...');
    Promise.all([getFunDataV2(cityId), getGovDataV2(cityId)])
        .then(function (result) {
            console.log(result[0].weatherData.length);
            console.log(result[1].weatherData.length);
        }).catch(function (reason) {
            console.error(reason);
        });
}

if (require.main === module) {
    var cityList = ['101010100', '101200101'];
    var isSeq = false;
    if (isSeq) {
        getWeatherDataBySeq(cityList[0]);
    } else {
        getWeatherDataByCon(cityList[0]);
    }

}
