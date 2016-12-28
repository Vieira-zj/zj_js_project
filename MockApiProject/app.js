/**
 * Created by zhengjin on 2016/11/30.
 *
 * Return mocked weather response data.
 */

var path = require('path');
var fs = require('fs');
var comm = require('./mock_common');

var express = require('express');
var app = express();

var getMockedWeatherRespDataV1 = require('./mock_weather_res_data');
var buildMockedWeatherRespDataV2 = require('./mock_weather_res_data_v2');
var mockedWeatherRespDataV1 = {};

// set run profile
var timeDelay = 5000;


app.route('/').get(function (req, res) {
    res.send('Mock API Project. Access index.html for the mock API list.');
});

app.route('/weather_v1').get(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(mockedWeatherRespDataV1);
});

app.route('/weather_v2').get(function (req, res) {
    setTimeout(function () {
        res.setHeader('Content-Type', 'application/json');
        fs.readFile(comm.weatherDataFilePath, 'utf-8', function (err, data) {
            if (err) {
                console.error(err);
                res.send('Error in get response data from file!');
            }
            return res.send(updateMockedWeatherRespDataV2FromQuery(data, req.query));
        });
    }, timeDelay);
});

var updateMockedWeatherRespDataV2FromQuery = function (data, query) {
    var respJsonObj = JSON.parse(data);
    var cityCn = query.city;
    if (cityCn && cityCn.length > 0) {
        respJsonObj.data.city = cityCn;
    }
    var cityId = query.cityId;
    if (cityId && cityId.length > 0) {
        respJsonObj.data.cityId = cityId;
    }

    return JSON.stringify(respJsonObj);
};


app.use(express.static(path.join(__dirname, 'public')))
    .listen(3000, function () {
        console.log('Mock api application is running at port 3000.');

        mockedWeatherRespDataV1 = getMockedWeatherRespDataV1();
        buildMockedWeatherRespDataV2();
    });
