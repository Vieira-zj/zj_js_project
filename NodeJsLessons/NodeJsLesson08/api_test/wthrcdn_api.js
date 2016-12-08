/**
 * Created by zhengjin on 2016/12/8.
 *
 * Verify weather data api from http://wthrcdn.etouch.cn/WeatherApi?citykey=?
 *
 */

var agent = require('superagent');
var co = require('co');
var xml2js = require('xml2js');

var getWeatherXmlData = function (url) {
    return new Promise(function (resolve) {
        agent.get(url).end(function (err, content) {
            if (err) {
                console.error(err);
            }
            resolve(content.text);
        })
    });
};

var parseWeatherXmlData = function (xmlData) {
    return new Promise(function (resolve) {
        var parser = new xml2js.Parser();
        parser.parseString(xmlData, function (err, result) {
            if (err) {
                console.error(err);
            }

            var retJson = {
                today: {},
                forecast: []
            };

            var respXml = result['resp'];
            retJson.today = buildTodayDataFromXml(respXml);

            var forecastXmlArr = respXml['forecast'][0]['weather'];
            forecastXmlArr.forEach(function (element) {
                retJson.forecast.push(buildForecastDataFromXml(element));
            });

            resolve(JSON.stringify(retJson));
        })
    });
};

var buildTodayDataFromXml = function (respXml) {
    return {
        city: respXml['city'][0],
        tmp: respXml['wendu'][0],
        windDirection: respXml['fengxiang'][0],
        windForce: respXml['fengli'][0],
        updateTime: respXml['updatetime'][0]
    };
};

var buildForecastDataFromXml = function (xmlEle) {
    var tmpDayEle = xmlEle['day'][0];
    return {
        date: xmlEle['date'][0],
        highTmp: xmlEle['high'][0],
        lowTmp: xmlEle['low'][0],
        type: tmpDayEle['type'][0],
        windDirection: tmpDayEle['fengxiang'][0],
        windForce: tmpDayEle['fengli'][0]
    };
};

if (require.main === module) {
    var url = 'http://wthrcdn.etouch.cn/WeatherApi?citykey=101200101';

    co(function* () {
        var retXmlData = yield getWeatherXmlData(url);
        var retData = yield parseWeatherXmlData(retXmlData);
        console.log(retData);
    }).catch(function (err) {
        console.error(err.stack);
    });

    console.log(__filename, 'DONE.');
}
