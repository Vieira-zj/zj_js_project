/**
 * Created by zhengjin on 2016/12/12.
 *
 * Test YaHoo weather api by using Mocha framework.
 * Config in test/mocha.opts
 */
var agent = require('superagent');
var should = require('should');

describe('Test weather data from YaHoo', function () {
    var respContent;

    before('', function (done) {
        var url = 'TODO';
        agent.get(url).end((err, content) => {
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
