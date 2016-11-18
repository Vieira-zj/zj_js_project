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

        // jQuery
        var $ = cheerio.load(resp.text);

        // get today weather data
        weatherDataOfficial.push(
            formatWeatherData($('#7d .clearfix li[class="sky skyid lv3 on"]').text()));

        // get forecast weather data
        $('#7d .clearfix li[class="sky skyid lv3"]').each(function (idx, element) {
            var $element = $(element);
            weatherDataOfficial.push(formatWeatherData($element.text()));
        });

        console.log('Weather data from official:');
        console.log(weatherDataOfficial);
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
        console.log(weatherDataFun);
    });

var formatWeatherData = function (item) {
    var field = item.split(/\n+/);
    return {
        date: field[1],
        type: field[2],
        temp: field[3],
        wind: field[4]
    }
};
