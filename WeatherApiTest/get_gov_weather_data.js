/**
 * Created by zhengjin on 2016/11/28.
 *
 * Crawl weather data from government website.
 * Url: http://www.weather.com.cn/weather/101200101.shtml
 */

var agent = require('superagent');
var cheerio = require('cheerio');
var comm = require('./common');

var isLog = comm.runProfiles.isLog;

var getGovForecastWeatherData = function (cityId) {
    return new Promise(function (resolve) {
        console.log("\nStart get forecast weather data for " + cityId + " from GOV website.");

        agent.get('http://www.weather.com.cn/weather/' + cityId + '.shtml')
            .end(function (err, resp) {
                if (err) {
                    console.error(err);
                    return;
                }

                var forecastWeatherDataArr = [];

                var $ = cheerio.load(resp.text);
                $('html').find('#7d>ul>li').each(function (idx, element) {
                    forecastWeatherDataArr.push(buildForecastWeatherData($(element)));
                });

                if (isLog) {
                    console.log('Forecast weather data for ' + cityId + ' from GOV:');
                    forecastWeatherDataArr.forEach(function (element) {
                        console.log(JSON.stringify(element));
                    });
                }
                resolve(forecastWeatherDataArr);
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

var getGovTodayWeatherData = function (cityId) {
    return new Promise(function (resolve) {
        console.log("\nStart get today weather data for " + cityId + " from GOV website.");

        agent.get('http://www.weather.com.cn/weather1d/' + cityId + '.shtml')
            .end(function (err, resp) {
                if (err) {
                    console.error(err);
                    return;
                }

                var $ = cheerio.load(resp.text);
                var $today = $('html').find('div#today');

                var curWeatherData = buildTodayWeatherDataForCur($today);

                var scriptData = getScriptsText($, $today);
                var WeatherDataArrPerHour = buildTodayWeatherDataForHours(scriptData.per3HourData);
                var airDataArrPerHour = buildTodayAirDataForHours(scriptData.air24HourData);

                if (isLog) {
                    console.log('\nCurrent weather data: ' + JSON.stringify(curWeatherData));
                    console.log('\nWeather data per 3 hours: ');
                    WeatherDataArrPerHour.forEach(function (element) {
                        console.log(JSON.stringify(element));
                    });
                    console.log('\nAir data per hours: ');
                    airDataArrPerHour.forEach(function (element) {
                        console.log(JSON.stringify(element));
                    });
                }
                resolve({
                    weaData: curWeatherData,
                    weaDataPerHour: WeatherDataArrPerHour,
                    weaAirPerHour: airDataArrPerHour
                });
            });
    });
};

var getScriptsText = function ($, $today) {
    var retData = {
        per3HourData: '',
        air24HourData: ''
    };

    $today.parent().find('script').each(function (idx, element) {
        var scriptText = $(element).text();
        if (scriptText.indexOf('hour3data') !== -1) {
            retData.per3HourData = scriptText.replace(new RegExp('\n', 'gm'), '');
        }
        if (scriptText.indexOf('observe24h_data') !== -1) {
            retData.air24HourData = scriptText.replace(new RegExp('\n', 'gm'), '');
        }
    });

    return retData;
};

var buildTodayWeatherDataForCur = function ($today) {
    var todayWeatherDataForCur = {};

    var $data = $today.find('div.t>ul>li');
    var $dayData = $data.first();
    var $nightData = $data.last();

    var queryType = 'p.wea';
    todayWeatherDataForCur.curType =
        $dayData.find(queryType).text() + '/' + $nightData.find(queryType).text();

    var queryTemp = 'p.tem>span';
    todayWeatherDataForCur.curTemp =
        $dayData.find(queryTemp).text() + '/' + $nightData.find(queryTemp).text();

    var queryWind = 'p.win>span';
    var $dayWind = $dayData.find(queryWind);
    var $nightWInd = $nightData.find(queryWind);
    todayWeatherDataForCur.curDayWind = $dayWind.text() + '/' + $dayWind.attr('title');
    todayWeatherDataForCur.curNightWind = $nightWInd.text() + '/' + $nightWInd.attr('title');

    return todayWeatherDataForCur;
};

var buildTodayWeatherDataForHours = function (scriptText) {
    if (scriptText.length === 0) {
        return 'null';
    }

    var scriptObj = JSON.parse(scriptText.split('=')[1]);
    var todayWeatherDataForHours = scriptObj['1d'];
    if (todayWeatherDataForHours) {
        return todayWeatherDataForHours;
    }
    return 'null';
};

var buildTodayAirDataForHours = function (scriptText) {
    var airDataArr = [];

    var obj24HourData = JSON.parse(scriptText.split('=')[1].replace(';', ''));
    var hourData = obj24HourData['od']['od2'];
    for (var length = hourData.length, idx = length - 1; idx >= 0; idx--) {
        var item = hourData[idx];
        var air = item['od28'];
        if (air.length > 0) {
            airDataArr.push({time: item['od21'], aqi: air});
        }
    }

    return airDataArr;
};

module.exports = {
    getForecastData: getGovForecastWeatherData,
    getTodayData: getGovTodayWeatherData
};

if (require.main === module) {
    isLog = true;
    console.log('Start Promise...');

//    getGovForecastWeatherData('101200101').then(function (resolve) {
//        console.log('Count: ' + resolve.length);
//    });

    getGovTodayWeatherData('101200101').then(function (resolve) {
        console.log('Get GOV today weather data done.');
    });

    console.log(__filename, 'DONE!');
}
