/**
 * Created by zhengjin on 2016/11/3.
 *
 * Read file data refer to Node.js Tutorial.
 */
var fs = require('fs');

var stream = fs.readFile('./NodeJsDemo/data.txt', 'utf8', function (error, data) {
    if (error) {
        console.log(error.message);
    }
    console.log(data);
});
