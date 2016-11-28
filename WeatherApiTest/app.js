/**
 * Created by zhengjin on 2016/11/18.
 *
 * Compare the weather data from government and FUN api.
 *
 */
var getGovData = require('./get_gov_weather_data');
var getFunData = require('./get_fun_weather_data');

var cityList = ['101010100'];

for (var idx = 0, length = cityList.length; idx < length; idx++) {
//    var govForecastArr = getGovData(cityList[idx]);
    var funDataPromise = getFunData(cityList[idx]);
    funDataPromise.then(function (result) {
        console.log(result.length);
    }).catch(function (reason) {
        console.error(reason);
    });

//    console.assert(govForecastArr.length === 7);
//    console.assert(funForecastArr.length === 5);

}
