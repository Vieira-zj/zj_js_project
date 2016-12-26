/**
 * Created by zhengjin on 2016/12/22.
 *
 * Mock the weather API resource data for version 2.
 */

var fs = require('fs');

var common = require('./mock_common');
var commWeatherTypes = common.weatherTypes;

var mockedWeatherRespData = {
    data: {
        city: '北京',
        cityId: '101010100',
        forecast: [],
        history: [],
        today: {}
    },
    retCode: '200',
    retMsg: 'ok'
};

var forecastSize = 5;

var getDateArr = function () {
    var dateArr = [];
    var dayByMilli = 24 * 60 * 60 * 1000;
    var curDateTime = new Date().getTime();

    for (var j = 0; j <= forecastSize; j++) {
        var tmpForecastDate = new Date(curDateTime + (j * dayByMilli));
        dateArr.push(tmpForecastDate.toLocaleDateString());
    }

    return dateArr;
};

var weatherTypeSunny = commWeatherTypes.SUNNY;
var initForecastDataEle = function (forecastDate) {
    return {
        date: forecastDate,
        fengLi: '微风级',
        fengXiang: '无持续风向',
        highTemp: '25',
        lowTemp: '15',
        type: weatherTypeSunny
    };
};

var initTodayDataEle = function (todayDate) {
    return {
        aqi: '60',
        curTemp: '20',
        date: todayDate,
        fengLi: '微风级',
        fengXiang: '无持续风向',
        highTemp: '25',
        lowTemp: '15',
        times: null,
        type: weatherTypeSunny
    };
};

var initWeatherRespData = function () {
    var dateArr = getDateArr();
    var dataElement = mockedWeatherRespData.data;
    var forecastArr = dataElement.forecast;

    for (var idx = 0, length = (forecastSize + 1); idx < length; idx++) {
        if (idx === 0) {
            dataElement.today = initTodayDataEle(dateArr[idx]);
        }
        forecastArr.push(initForecastDataEle(dateArr[idx]));
    }
};

var saveWeatherRespData = function (content) {
    fs.writeFile(common.weatherDataFilePath, content, function (err) {
        if (err) {
            console.error(err);
        }
    });
};

var updateWeatherRespData = function () {
    // do update here, or update weather_resp_data.data directly.
    var dataElement = mockedWeatherRespData.data;
    dataElement.today.type = commWeatherTypes.CLOUDY;
};

var buildMockedWeatherRespData = function () {
    initWeatherRespData();
    updateWeatherRespData();
    saveWeatherRespData(JSON.stringify(mockedWeatherRespData));
};


module.exports = buildMockedWeatherRespData;

if (require.main === module) {
    buildMockedWeatherRespData();
    console.log(__filename, 'DONE!');
}
