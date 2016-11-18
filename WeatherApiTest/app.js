/**
 * Created by zhengjin on 2016/11/18.
 *
 * Get the weather data from both official and funshion.
 * TODO: Compare the weather data
 *
 */
var superagent = require('superagent'),
    cheerio = require('cheerio');

var weatherDataOfficial = [],
    weatherDataFun = [];

superagent.get('http://www.weather.com.cn/weather/101200101.shtml')
    .end(function (err, resp) {
        if (err) {
            console.error(err);
            return;
        }

        var $ = cheerio.load(resp.text);
        // get forecast weather data
        $('#7d>ul.clearfix>li').each(function (idx, element) {
            weatherDataOfficial.push(formatWeatherData($(element)));
        });

        console.log('Weather data from official:');
        weatherDataOfficial.forEach(function (element) {
            console.log(JSON.stringify(element));
        })
    });

superagent.get('http://172.17.12.110:8480/tv_message/weather/city')
    .query('plat_type=funtv&version=2.10.0.3_s&sid=FD5551A-SU&mac=28:76:CD:01:96:F6')
    .query('random=1479353604311820&sign=fcc9a70567a644eda0201fbc9bc1ef15')
    .query('province=&city=&area=&cityId=101200101')
    .end(function (err, resp) {
        if (err) {
            console.error(err);
            return;
        }

        var jsonObj = JSON.parse(resp.text);

        // get today weather data
        var itemToday = jsonObj.data['today'];
        weatherDataFun.push({
            date: itemToday['date'],
            type: itemToday['type'],
            temp: itemToday['lowtemp'] + ' / ' + itemToday['hightemp'],
            wind: itemToday['fengli']
        });

        // get forecast weather data
        jsonObj.data['forecast'].forEach(function (element) {
            weatherDataFun.push({
                date: element['date'],
                type: element['type'],
                temp: element['lowtemp'] + ' / ' + element['hightemp'],
                wind: element['fengli']
            });
        });

        console.log('Weather data from funshion API:');
        weatherDataFun.forEach(function (element) {
            console.log(JSON.stringify(element));
        })
    });

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
