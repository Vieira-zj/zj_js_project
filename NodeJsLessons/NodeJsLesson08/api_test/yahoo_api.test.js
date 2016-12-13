/**
 * Created by zhengjin on 2016/12/12.
 *
 * Test YaHoo weather api by using Mocha framework.
 * Config in test/mocha.opts
 */
var agent = require('superagent');
var should = require('should');

var buildUrl = function (cityName) {
    var yahooUrl = 'https://query.yahooapis.com/v1/public/yql?';
    var yahooYql = 'q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'
        + cityName + '%22)';
    var yahooFormat = '&format=json';

    return yahooUrl + yahooYql + yahooFormat;
};

describe('Test weather data from YaHoo', function () {
    var respContent;

    before('', function (done) {
        agent.get(buildUrl('BeiJing')).end((err, content) => {
            if (err) {
                console.error(err.message);
            }
            respContent = content;
            done();
        });
    });

    it('test status code is 200', function () {
        respContent.statusCode.should.equal(200);
    });

    it('test response body', function () {
        respContent.text.length.should.greaterThan(0);
    });
});
