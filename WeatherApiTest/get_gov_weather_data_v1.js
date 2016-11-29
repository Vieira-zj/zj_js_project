/**
 * Created by zhengjin on 2016/11/28.
 *
 * Get weather data from government website.
 */
var superagent = require('superagent');
var cheerio = require('cheerio');
var settings = require('./run_settings');

var getGovWeatherData = function (pData) {
    return new Promise(function (resolve) {
        var cityId = pData.cityId;
        console.log("Start get weather data for " + cityId + " from government html page.");

        superagent.get('http://www.weather.com.cn/weather/' + cityId + '.shtml')
            .end(function (err, resp) {
                if (err) {
                    console.error(err);
                    return;
                }

                var weatherDataGov = [];
                var $ = cheerio.load(resp.text);
                $('#7d>ul>li').each(function (idx, element) {
                    weatherDataGov.push(formatWeatherData($(element)));
                });

                if (settings.isLog) {
                    console.log('Weather data for ' + cityId + ' from government:');
                    weatherDataGov.forEach(function (element) {
                        console.log(JSON.stringify(element));
                    });
                }

                resolve({
                    cityId: cityId,
                    funData: pData.funData,
                    GovData: weatherDataGov
                });
            });
    });
};

var formatWeatherData = function (element) {
    var fields = element.text().split(/\n+/);
    return {
        date: fields[1],
        type: fields[2],
        temp: fields[3],
        WindForce: fields[4],
        WindDirection: element.find('p.win>em>span').first().attr('title')
    }
};

module.exports = getGovWeatherData;
