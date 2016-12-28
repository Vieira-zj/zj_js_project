/**
 * Created by zhengjin on 2016/11/28.
 *
 * Get weather data from government website.
 * Url: http://www.weather.com.cn/weather/101200101.shtml
 */

var agent = require('superagent');
var cheerio = require('cheerio');
var comm = require('./common');

var getGovForecastWeatherData = function (cityId) {
    return new Promise(function (resolve) {
        console.log("\nStart get forecast weather data for " + cityId + " from GOV website.");

        agent.get('http://www.weather.com.cn/weather/' + cityId + '.shtml')
            .end(function (err, resp) {
                if (err) {
                    console.error(err);
                    return;
                }

                var forecastWeatherDataGov = [];

                var $ = cheerio.load(resp.text);
                $('html').find('#7d>ul>li').each(function (idx, element) {
                    forecastWeatherDataGov.push(buildForecastWeatherData($(element)));
                });

                if (comm.isLog) {
                    console.log('Weather data for ' + cityId + ' from GOV:');
                    forecastWeatherDataGov.forEach(function (element) {
                        console.log(JSON.stringify(element));
                    });
                }

                resolve(forecastWeatherDataGov);
            });
    });
};

var buildForecastWeatherData = function ($ele) {
    return {
        date: $ele.find('h1').text(),
        type: $ele.find('.wea').text(),
        temp: comm.getNumFromTemp($ele.find('.tem>i').text()) + '/'
            + comm.getNumFromTemp($ele.find('.tem>span').text()),
        wind: $ele.find('.win>em>span').first().attr('title') + '/' + $ele.find('.win>i').text()
    }
};


module.exports = getGovForecastWeatherData;

if (require.main === module) {
    console.log('Start Promise...');

    getGovForecastWeatherData('101200101').then(function (resolve) {
        console.log('Count: ' + resolve.length);
    });

    console.log(__filename, 'DONE!');
}
