/**
 * Created by zhengjin on 2016/11/28.
 *
 * Get weather data from government website.
 */
var agent = require('superagent');
var cheerio = require('cheerio');
var comm = require('./common');

var getGovWeatherData = function (cityId) {
    return new Promise(function (resolve) {
        console.log("Start get weather data for " + cityId + " from GOV website.");

        agent.get('http://www.weather.com.cn/weather/' + cityId + '.shtml')
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

                if (comm.isLog) {
                    console.log('Weather data for ' + cityId + ' from GOV:');
                    weatherDataGov.forEach(function (element) {
                        console.log(JSON.stringify(element));
                    });
                }

                resolve(weatherDataGov);
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

if (require.main === module) {
    console.log('Start Promise...');

    getGovWeatherData('101010100').then(function (resolve) {
        console.log('Count: ' + resolve.length);
    });

    console.log(__filename, 'DONE!');
}
