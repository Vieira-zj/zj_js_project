/**
 * Created by zhengjin on 2017/4/27.
 */

// demo 01, callback in setTimeout()
var isDemo01Run = false;
if (isDemo01Run) {
    (function demo01() {
        var logDelay1 = function (input) {
            setTimeout(function (text) {
                console.log('text:', text);
            }, 1000, input);
        };

        var logDelay2 = function (input) {
            setTimeout(function () {
                console.log('text:', input);
            }, 2000);
        };

        var logDelay3 = function (input) {
            setTimeout(x => console.log('text:', x), 3000, input);
        };

        var logDelay4 = function (input) {
            setTimeout(() => console.log('text:', input), 4000);
        };

        logDelay1('test1');
        logDelay2('test2');
        logDelay3('test3');
        logDelay4('test4');
    })();
}


// demo 02, check object property exist
var isDemo02Run = false;
if (isDemo02Run) {
    (function demo02() {
        // match null, undefined, false, '' and 0
        var isPropertyExist1 = function (tmpProperty) {
            return Boolean(tmpProperty);
        };

        // == null match for both null and undefined
        var isPropertyExist2 = function (tmpProperty) {
            return tmpProperty != null;
        };

        var tmpObject = {
            name: 'test',
            age: 17,
            tmpUndefined: undefined,
            tmpFalse: false,
            tmpEmpty: '',
            tmpZero: 0
        };

        console.log(isPropertyExist1(tmpObject.name));
        console.log(isPropertyExist2(tmpObject.name));

        console.log(isPropertyExist1(tmpObject.tmpUndefined));
        console.log(isPropertyExist2(tmpObject.tmpUndefined));

        console.log(isPropertyExist1(tmpObject.tmpFalse));
        console.log(isPropertyExist2(tmpObject.tmpFalse));

        console.log(isPropertyExist1(tmpObject.tmpEmpty));
        console.log(isPropertyExist2(tmpObject.tmpEmpty));

        console.log(isPropertyExist1(tmpObject.tmpZero));
        console.log(isPropertyExist2(tmpObject.tmpZero));
    })();
}


// demo 03, args
var isDemo03Run = false;
if (isDemo03Run) {
    var tmpInputArgs = process.argv;
    if (tmpInputArgs.length > 0) {
        tmpInputArgs.forEach(function (val, idx) {
            console.log(idx + ': ' + val);
        });
    }
}


// demo 04-01, arrays of fns
var isDemo0401Run = false;
if (isDemo0401Run) {
    (function () {
        var stack = [];

        function fn1() {
            console.log('fn1 invoked.');
        }

        stack.push(fn1);

        function fn2() {
            console.log('fn2 invoked.');
        }

        stack.push(fn2, function () {
            console.log('fn3 invoked.');
        });

        stack.forEach(fn => fn());
    })();
}


// demo 04-02, arrays of fns, sync
var isDemo0402Run = false;
if (isDemo0402Run) {
    (function () {
        var stack = [];
        var index = 0;

        function next() {
            if (index > (stack.length - 1)) {
                console.log('End of stack.');
                return;
            }

            var fn = stack[index];
            index = index + 1;
            if (typeof fn === 'function') {
                fn();
            }
        }

        function fn1() {
            console.log('fn1 invoked.');
            next();
        }

        stack.push(fn1);

        function fn2() {
            setTimeout(function fn2Timeout() {
                console.log('fn2Timeout invoked.');
                next();
            }, 1000);
        }

        stack.push(fn2, function () {
            console.log('fn3 invoked.');
            next();
        });

        next();
    })();
}


console.log(__filename, 'DONE.');
