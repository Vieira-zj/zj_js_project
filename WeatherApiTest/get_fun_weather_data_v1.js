/**
 * Created by zhengjin on 2016/11/28.
 *
 * Get weather from FUN json api.
 */
var superagent = require('superagent');
var settings = require('./run_settings');

var getFunWeatherData = function (cityId) {
    return new Promise(function (resolve) {
        console.log("Start get weather data for " + cityId + " from FUN apis.");

        superagent.get('http://172.17.12.110:8480/tv_message/weather/city')
            .query('plat_type=funtv&version=2.10.0.3_s&sid=FD5551A-SU&mac=28:76:CD:01:96:F6')
            .query('random=1479353604311820&sign=fcc9a70567a644eda0201fbc9bc1ef15')
            .query('province=&city=&area=&cityId=' + cityId)
            .end(function (err, resp) {
                if (err) {
                    console.error(err);
                    return;
                }

                var weatherDataFun = [];
                var jsonRespData = JSON.parse(resp.text).data;

                // get today weather data
                var itemToday = jsonRespData['today'];
                weatherDataFun.push({
                    date: itemToday['date'],
                    type: itemToday['type'],
                    temp: itemToday['lowtemp'] + ' / ' + itemToday['hightemp'],
                    wind: itemToday['fengli']
                });

                // get forecast weather data
                jsonRespData['forecast'].forEach(function (element) {
                    weatherDataFun.push({
                        date: element['date'],
                        type: element['type'],
                        temp: element['lowtemp'] + ' / ' + element['hightemp'],
                        wind: element['fengli']
                    });
                });

                if (settings.isLog) {
                    console.log('Weather data for ' + cityId + ' from funshion API:');
                    weatherDataFun.forEach(function (element) {
                        console.log(JSON.stringify(element));
                    });
                }

                resolve({
                    cityId: cityId,
                    funData: weatherDataFun
                });
            });
    });
};

module.exports = getFunWeatherData;
