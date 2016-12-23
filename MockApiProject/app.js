/**
 * Created by zhengjin on 2016/11/30.
 *
 * Get request and return response data.
 */

var path = require('path');
var express = require('express');

var app = express();

app.route('/').get(function (req, res) {
    res.send('Mock API Project. Access index.html for the mock API list.');
});

app.route('/weather_v1').get(function (req, res) {
    var getMockedWeatherRespDataV1 = require('./mock_weather_res_data');
    res.setHeader('Content-Type', 'application/json');
    res.send(getMockedWeatherRespDataV1());
});

app.route('/weather_v2').get(function (req, res) {
    var getMockedWeatherRespDataV2 = require('./mock_weather_res_data_v2');
    res.setHeader('Content-Type', 'application/json');
    res.send(getMockedWeatherRespDataV2());
});

app.use(express.static(path.join(__dirname, 'public')))
    .listen(3000, function () {
        console.log('Mock api application is running at port 3000.');
    });
