/**
 * Created by zhengjin on 2016/11/1.
 */
var express = require('express');
var superagent = require('superagent');

var url = 'http://apis.baidu.com/apistore/weatherservice/recentweathers?cityid=101010100';
var apikey = '7705cca8df9fb3dbe696ce2310979a62';

var app = express();

app.route('/weather').get(function (req, res, next) {
    superagent.get(url)
        .set('apikey', '7705cca8df9fb3dbe696ce2310979a62')
        .end(function (err, content) {
            if (err) {
                return next(err);
            }
            var retContent = JSON.parse(content.text)['retData']['today'];
            res.send(retContent);
        });
});

app.listen(3000, function () {
    console.log('app is listening at port 3000');
});
