/**
 * Created by zhengjin on 2017/5/8.
 * Demos use external modules.
 */

// #1, console
// console.dir()
function MyTmpObject(name, age) {
    this.name = name;
    this.age = age;
}
MyTmpObject.prototype.say = function () {
    console.log("I am say function of tmp object.");
};

var tmpObj = new MyTmpObject('TEST', 26);
console.dir(tmpObj);

var tmpStr = 'test';
console.dir(tmpStr);


// console.time()
var fs = require('fs');

const TMP_TAG = 'ReadFileTime';
console.time(TMP_TAG);
var content = fs.readFileSync('./app.js', 'utf-8');
console.log('File Content:\n' + content);
console.timeEnd(TMP_TAG);


// console.assert()
console.assert(1 === 1, 'if false, send message.');


// TODO at 2017/5/8
// #2, path


// #3, util


// #4, url


// end
