/**
 * Created by zhengjin on 2016/11/30.
 *
 * Mock the weather API response data.
 */

var resDataWeather = {
    data: {
        cacheTime: 0,
        city: '',
        cityid: '101010100',
        forecast: [
            {
                date: '2016-12-01',
                fengli: '微风级',
                fengxiang: '无持续风向',
                hightemp: '8℃',
                lowtemp: '-4℃',
                type: '晴',
                week: '星期四'
            },
            {
                date: '2016-12-02',
                fengli: '微风级',
                fengxiang: '无持续风向',
                hightemp: '7℃',
                lowtemp: '-4℃',
                type: '晴',
                week: '星期五'
            },
            {
                date: '2016-12-03',
                fengli: '微风级',
                fengxiang: '无持续风向',
                hightemp: '7℃',
                lowtemp: '-2℃',
                type: '霾',
                week: '星期六'
            },
            {
                date: '2016-12-04',
                fengli: '微风级',
                fengxiang: '无持续风向',
                hightemp: '7℃',
                lowtemp: '-2℃',
                type: '霾',
                week: '星期天'
            }
        ],
        'history': [
            {
                aqi: '43',
                date: '2016-11-23',
                fengli: '微风级',
                fengxiang: '无持续风向',
                hightemp: '3℃',
                lowtemp: '-6℃',
                type: '晴',
                week: '星期三'
            },
            {
                aqi: '117',
                date: '2016-11-24',
                fengli: '微风级',
                fengxiang: '无持续风向',
                hightemp: '4℃',
                lowtemp: '-6℃',
                type: '晴',
                week: '星期四'
            },
            {
                aqi: '211',
                date: '2016-11-25',
                fengli: '微风级',
                fengxiang: '无持续风向',
                hightemp: '5℃',
                lowtemp: '-3℃',
                type: '霾',
                week: '星期五'
            },
            {
                aqi: '286',
                date: '2016-11-26',
                fengli: '微风级',
                fengxiang: '无持续风向',
                hightemp: '8℃',
                lowtemp: '0℃',
                type: '霾',
                week: '星期六'
            },
            {
                aqi: '30',
                date: '2016-11-27',
                fengli: '3-4级',
                fengxiang: '北风',
                hightemp: '8℃',
                lowtemp: '-4℃',
                type: '晴',
                week: '星期天'
            },
            {
                aqi: '97',
                date: '2016-11-28',
                fengli: '微风级',
                fengxiang: '无持续风向',
                hightemp: '8℃',
                lowtemp: '-3℃',
                type: '晴',
                week: '星期一'
            },
            {
                aqi: '142',
                date: '2016-11-29',
                fengli: '微风级',
                fengxiang: '无持续风向',
                hightemp: '4℃',
                lowtemp: '-3℃',
                type: '雨夹雪',
                week: '星期二'
            }
        ],
        today: {
            aqi: '156',
            curTemp: '3℃',
            date: '2016-11-30',
            fengli: '微风级',
            fengxiang: '无持续风向',
            hightemp: '4℃',
            lowtemp: '-3℃',
            times: [],
            type: '雨夹雪'
        }
    },
    retCode: '200',
    retMsg: 'ok'
};

var historySize = 7;
var forecastSize = 4;

var getDateArr = function () {
    var dateArr = [];
    var dayByMilli = 24 * 60 * 60 * 1000;
    var curDateTime = new Date().getTime();

    for (var i = historySize; i >= 0; i--) {
        dateArr.push(new Date(curDateTime - (i * dayByMilli)).toLocaleDateString());
    }  // include today data
    for (var j = 1; j <= forecastSize; j++) {
        dateArr.push(new Date(curDateTime + (j * dayByMilli)).toLocaleDateString());
    }

    return dateArr;
};

var updateDateOfWeatherData = function () {
    var dateArr = getDateArr();
    var dataElement = resDataWeather.data;
    var historyArr = dataElement.history;
    var forecastArr = dataElement.forecast;

    for (var idx = 0, length = (historySize + forecastSize + 1); idx < length; idx++) {
        if (idx < historySize) {
            historyArr[idx].date = dateArr[idx];
        } else if (idx > historySize) {
            forecastArr[idx - historySize - 1].date = dateArr[idx];
        } else {
            dataElement.today.date = dateArr[idx];
        }
    }
};

var getResDataWeather = function () {
    updateDateOfWeatherData();
    return resDataWeather;
};

module.exports = getResDataWeather;

if (require.main === module) {
    updateDateOfWeatherData();
    console.log(JSON.stringify(resDataWeather));
}
