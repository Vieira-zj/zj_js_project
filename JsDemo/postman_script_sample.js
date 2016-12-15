/**
 * Created by zhengjin on 2016/12/15.
 *
 * Postman test script for url:
 * http://apis.baidu.com/heweather/weather/free?city={{cityEn}}
 * cityEn = beijing
 */
var getCurrentDate = function() {
    var myDate = new Date();
    var dateItems = [myDate.getFullYear(), myDate.getMonth() + 1, myDate.getDate()];
    return dateItems.join('-');
};


var reqCityName = request.url.split('?')[1].split('=')[1];
console.log('Test for city ' + reqCityName);


tests['Status code is 200'] = responseCode.code === 200;

tests['Response time is less than 2000ms'] = responseTime < 2000;


var respBody = JSON.parse(responseBody)['HeWeather data service 3.0'][0];
var respForecast = respBody.daily_forecast;


var respStatusCodeTest = false;
try {
    respStatusCodeTest = (respBody.status === 'ok');
} catch (e) {
    console.error(e);
}
tests['Response body status'] = respStatusCodeTest;


var respCityNameTest = false;
try {
    respCityNameTest = (respBody.basic.city === reqCityName);
} catch (e) {
    console.error(e);
}
tests['Response body city name'] = respCityNameTest;


var respForecastSizeTest = false;
try {
    respForecastSizeTest = (respForecast.length >= 5);
} catch (e) {
    console.error(e);
}
tests['Response body forecast size'] = respForecastSizeTest;


var respCurDateTest = false;
try {
    respCurDateTest = (respForecast[0].date === getCurrentDate());
} catch (e) {
    console.error(e);
}
tests['Response body current date'] = respCurDateTest;
