/**
 * Created by zhengjin on 2016/11/28.
 *
 * Get weather from FUN json api v2.
 */
var agent = require('superagent');
var comm = require('./common');

var getFunWeatherDataV2 = function (cityId) {
    return new Promise(function (resolve) {
        console.log("\nStart get weather data for " + cityId + " from FUN api v2.");

        agent.get('http://card.tv.funshion.com/api/rest/tv/weather/get')
            .query('plat_type=funtv&version=2.10.0.11_s&sid=FD4351A-LU&account=28:76:CD:01:45:64')
            .query('random=1482485365073683&sign=b8601ff628eb6ab29989dd4ef460f077')
            .query('province=&city=&area=&cityId=' + cityId)
            .end(function (err, resp) {
                if (err) {
                    console.error(err);
                    return;
                }

                var weatherDataFun = [];

                // get today weather data
                var jsonRespData = JSON.parse(resp.text).data;
                var itemToday = jsonRespData['today'];
                weatherDataFun.push({
                    date: itemToday['date'],
                    type: comm.getWeatherType(itemToday['type']),
                    temp: itemToday['lowTemp'] + '/' + itemToday['highTemp'],
                    curTemp: itemToday['curTemp'],
                    wind: itemToday['fengXiang'] + '/' + itemToday['fengLi']
                });

                // get forecast weather data
                jsonRespData['forecast'].forEach(function (element) {
                    weatherDataFun.push({
                        date: element['date'],
                        type: comm.getWeatherType(element['type']),
                        temp: element['lowTemp'] + '/' + element['highTemp'],
                        wind: itemToday['fengXiang'] + '/' + itemToday['fengLi']
                    });
                });

                if (comm.isLog) {
                    console.log('Weather data for ' + cityId + ' from FUN API:');
                    weatherDataFun.forEach(function (element) {
                        console.log(JSON.stringify(element));
                    });
                }

                resolve(weatherDataFun);
            });
    });
};


module.exports = getFunWeatherDataV2;

if (require.main === module) {
    console.log('Start Promise...');

    getFunWeatherDataV2('101010100').then(function (resolve) {
        console.log('Count: ' + resolve.length);
    }).catch(function (reason) {
        console.error(reason);
    });

    console.log(__filename, 'DONE!');
}
