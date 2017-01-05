/**
 * Created by zhengjin on 2016/11/30.
 *
 * Mocked response data for Fun weather API.
 */

var path = require('path');
var fs = require('fs');
var comm = require('./mock_common');

var express = require('express');
var app = express();

var getMockedWeatherRespDataV1 = require('./mock_weather_res_data');
var getMockedWeatherRespDataV2 = require('./mock_weather_res_data_v2');

var mockedWeatherRespDataV1 = {};
var isDataSaved = false;
var timeDelay = 200;


app.route('/').get(function (req, res) {
    res.send('Mock API Project. Access index.html for the mocked APIs list.');
});

app.route('/weather_v1').get(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(mockedWeatherRespDataV1);
});

app.route('/weather_v2').get(function (req, res) {
    setTimeout(function () {
        if (isDataSaved) {
            res.setHeader('Content-Type', 'application/json');
            fs.readFile(comm.weatherDataFilePath, 'utf-8', function (err, data) {
                if (err) {
                    console.error(err);
                    res.send('Error in loading response data in file!');
                }
                res.send(updateMockedWeatherRespDataV2FromQuery(data, req.query));
            });
        } else {
            res.send('Data is loading..., refresh after 5 seconds.');
        }
    }, timeDelay);
});

app.use(express.static(path.join(__dirname, 'public')))
    .listen(3000, function () {
        console.log('Mock api application is running at port 3000.');
        initData();
    });


var initData = function () {
    mockedWeatherRespDataV1 = getMockedWeatherRespDataV1();
    saveWeatherRespData(getMockedWeatherRespDataV2());
};

var saveWeatherRespData = function (content) {
    fs.writeFile(comm.weatherDataFilePath, content, function (err) {
        if (err) {
            console.error(err);
        }
        isDataSaved = true;
    });
};

var updateMockedWeatherRespDataV2FromQuery = function (data, query) {
    var queryCityCn = query.city;
    if (!queryCityCn || queryCityCn.length === 0) {
        return data;
    }
    var queryCityId = query.cityId;
    if (!queryCityId || queryCityId.length === 0) {
        return data;
    }

    var respJsonObj = JSON.parse(data);
    var respData = respJsonObj.data;
    if (!respData) {  // fix issue: {data: null}
        return data;
    }

    if (respData.city && respData.cityId) {
        respData.city = queryCityCn;
        respData.cityId = queryCityId;
    }

    return JSON.stringify(respJsonObj);
};
