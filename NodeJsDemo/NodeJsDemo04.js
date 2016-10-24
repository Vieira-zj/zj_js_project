/**
 * Created by Vieira on 2016/10/24.
 */
var express = require('express');

var app = express();

app.set('view engine', 'jade');

app.get('/demo04', function (request, response) {
    response.send('Hello, World');
});

var server = app.listen(3000, function () {
    
});

// need to config package.json before run express demo
