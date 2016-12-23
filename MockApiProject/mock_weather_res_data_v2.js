/**
 * Created by zhengjin on 2016/12/22.
 *
 * Mock the weather API resource data for version 2.
 */

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

var initForecastDataEle = function (forecastDate) {
    return {
        date: forecastDate,
        fengLi: '微风级',
        fengXiang: '无持续风向',
        highTemp: '25℃',
        lowTemp: '15℃',
        type: '晴'
    };
};

var initTodayDataEle = function (todayDate) {
    return {
        aqi: '60',
        curTemp: '20℃',
        date: todayDate,
        fengLi: '微风级',
        fengXiang: '无持续风向',
        highTemp: '25℃',
        lowTemp: '15℃',
        times: null,
        type: '晴'
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

var updateWeatherRespData = function () {
    // do update here
    var dataElement = mockedWeatherRespData.data;
    dataElement.forecast[0].type = '大暴雨';
};

var getMockedWeatherRespData = function () {
    initWeatherRespData();
    updateWeatherRespData();
    return JSON.stringify(mockedWeatherRespData);
};


module.exports = getMockedWeatherRespData;

if (require.main === module) {
    console.log(getMockedWeatherRespData());
    console.log(__filename, 'DONE!');
}
