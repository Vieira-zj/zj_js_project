/**
 * Created by zhengjin on 2016/11/30.
 *
 * Get request and return response data.
 */

var path = require('path');
var express = require('express');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.route('/').get(function (req, res) {
    res.send('Mock API Project. Access index.html for the mock API list.');
});

app.route('/weather_v1').get(function (req, res) {
    var getResData = require('./mock_weather_res_data');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(getResData()));
});

app.listen(3000, function () {
    console.log('Mock api application is running at port 3000.');
});
