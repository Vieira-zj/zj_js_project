/**
 * Created by zhengjin on 2017/3/28.
 */

// demo 01, switch by expression
var isDemo01Run = false;
if (isDemo01Run) {
    (function demo01() {
        var getCategory = function (age) {
            var category = '';
            switch (true) {
                case (isNaN(age)):
                {
                    category = 'not a number';
                    break;
                }
                case (age >= 50):
                {
                    category = 'Old';
                    break;
                }
                case (age <= 10):
                {
                    category = 'Baby';
                    break;
                }
                default:
                {
                    category = 'Yong';
                    break;
                }
            }
            return category;
        };

        console.log('Category:', getCategory(35));
    })();
}


// demo 02, iterator: for in, for of and forEach
var isDemo02Run = false;
if (isDemo02Run) {
    (function demo02() {
        var tmpArr1 = ['a', 'b', 'c'];
        tmpArr1.name = 'tmp array1';
        for (let attr in tmpArr1) { // for attribute (array index)
            if (tmpArr1.hasOwnProperty(attr)) {
                console.log('for in, element:', tmpArr1[attr]);
            }
        }

        var tmpArr2 = ['m', 'n', 'p'];
        tmpArr2.name = 'tmp array2';
        for (let attr of tmpArr2) { // for element
            console.log('for of, tmpArr element:', attr);
        }

        var tmpArr3 = ['x', 'y', 'z'];
        tmpArr3.forEach(function (element, idx) { // for index and element
            console.log('Foreach, element:', element, 'at index:', idx);
        });
    })();
}


// demo 03, filter
// Note: map(), reduce() and filter() just for Array
var isDemo03Run = false;
if (isDemo03Run) {
    (function demo03() {
        var myArr = ['a', 'b', '  ', undefined, null, 'a'];

        // filter invalid and empty string
        var tmpArr = myArr.filter(ele => ele && ele.trim());
        console.log('Type array:', tmpArr instanceof Array);
        console.log('Value:', tmpArr);

        var mySet = new Set(myArr);
        // var tmpSet = mySet.filter(ele => ele && ele.trim());  // error
        console.log(mySet);
    })();
}


// demo 04, arrow =>fn
var isDemo0401Run = false;
if (isDemo0401Run) {
    // #1. non-fixed variables
    (function demo0401() {
        var myArrowFn = (x, y, ...rest) => {
            var sum = x + y;
            for (var i = 0, length = rest.length; i < length; i++) {
                sum += rest[i];
            }
            return sum;
        };

        console.log('Sum:', myArrowFn(1, 9, 2, 3, 1));
    })();
}

var isDemo0402Run = false;
if (isDemo0402Run) {
    // #2. this
    (function demo0402() {
        var myObj = {
            birth: 1990,
            getAge: function (year) {
                var fn = function (year) {
                    return year - this.birth;
                };
                return fn.call({birth: 2000}, year); // this.birth = 2000
            },
            getAgeArrow: function (year) {
                var fn = (y) => y - this.birth;
                return fn.call({birth: 2000}, year); // this.birth = 1990
            }
        };

        console.log('Age:', myObj.getAge(2015));
        console.log('Age:', myObj.getAgeArrow(2015));
    })();
}


// demo 05, RegExp, global search
var isDemo05Run = false;
if (isDemo05Run) {
    (function demo06() {
        // g - global, i - ignore case
        var srcStr = 'JavaScript, VBScript, JScript and ECMAScript';
        // var re = /[a-zA-Z]+cript/g;
        var re = /[a-z]+cript/gi;

        while (true) {
            var tmpResult = re.exec(srcStr);
            if (!tmpResult) {
                break;
            }
            console.log(tmpResult[0]);
            console.log(re.lastIndex);
        }
    })();
}


// demo 06, empty function
var isDemo06Run = false;
if (isDemo06Run) {
    var myEmptyFn = function () {
        // default return undefined
    };
    console.log('myEmptyFn return:', myEmptyFn());
}


// demo 07, typeof and instanceof
var isDemo07Run = false;
if (isDemo07Run) {
    (function demo07() {
        // 原类型
        var tmpStr = 'test';
        console.log('is String:');
        console.log(typeof tmpStr === 'string');
        console.log(tmpStr instanceof String); // false

        var tmpNumber = 1;
        console.log('is Number:');
        console.log(typeof tmpNumber === 'number');

        var tmpBool = false;
        console.log('is Boolean:');
        console.log(typeof tmpBool === 'boolean');

        // 对象类型
        var tmpArr = ['a', 'b', 'c'];
        console.log('is Array:');
        console.log(typeof tmpArr === 'object'); // true
        console.log(tmpArr instanceof Array);

        var tmpObject = {name: 'test'};
        console.log('is Object:');
        console.log(typeof tmpObject === 'object');
        console.log(tmpObject instanceof Object);

        var tmpFn = () => console.log('hello world');
        console.log('is Function:');
        console.log(typeof tmpFn === 'function');
        console.log(tmpFn instanceof Function);
    })();
}


// demo 08, function
var isDemo08Run = false;
if (isDemo08Run) {
    (function demo08() {
        // #1
        var factorial = (function f(num) {
            if (num === 1) {
                return 1;
            }
            return num * factorial(num - 1);
        });
        console.log('factorial:', factorial(5));

        // #2
        function superFunc() {
            var subFuncs = [];
            for (var i = 0; i < 10; i++) {
                subFuncs[i] = (function () {
                    return i + 1;
                })(i);
            }
            return subFuncs;
        }

        var tmpArr = superFunc();
        console.log('Type array:', tmpArr instanceof Array);
        console.log('value:', tmpArr);
    })();
}


// demo 09, "this" and prototype chain
var isDemo0901Run = false;
if (isDemo0901Run) { // #1.1
    (function demo0901() {
        function Thing() {
        }

        Thing.prototype.foo = 'bar';
        Thing.prototype.logFoo = function () {
            console.log(this.foo);
        };
        Thing.prototype.setFoo = function (newFoo) {
            this.foo = newFoo; // this => instance
            // this.__proto__.foo = newFoo;
        };

        var thing1 = new Thing();
        var thing2 = new Thing();

        thing1.logFoo(); // logs "bar"
        thing2.logFoo(); // logs "bar"

        // set new property foo with value 'foo'
        thing1.setFoo('foo');
        thing1.logFoo(); // logs "foo";
        thing2.logFoo(); // logs "bar";

        // set new property foo with value 'foobar'
        thing2.foo = 'foobar';
        thing1.logFoo(); // logs "foo";
        thing2.logFoo(); // logs "foobar";

        console.log(thing1.__proto__.foo);
        console.log(thing2.__proto__.foo);
    })();
}

var isDemo0902Run = false;
if (isDemo0902Run) { // #1.2
    (function demo0902() {
        function Thing1() {
            this.foo = 'foo'
        }
        Thing1.prototype.foo = 'bar';
        Thing1.prototype.logFoo = function () {
            console.log(this.foo);
        };

        function Thing2() {
            this.foo = 'foobar';
        }
        Thing2.prototype = new Thing1();

        var thing = new Thing2();
        // logFoo() is bind thing (Thing2)
        thing.logFoo(); // foobar
        console.log(thing.__proto__ instanceof Thing1);
        console.log(thing.__proto__.foo);  // foo

        var superPrototype = thing.__proto__.__proto__;
        console.log(superPrototype.constructor.name);  // fn: Thing1
        console.log(superPrototype.foo);  // bar
    })();
}

var isDemo0903Run = false;
if (isDemo0903Run) { // #2
    (function demo0903() {
        function Thing() {
        }
        Thing.prototype.foo = 'bar';
        Thing.prototype.logFoo = function () {
            var info = 'attempting to log this.foo:';

            function doIt() {
                // keyword "this" is not inherit from out_method
                console.log(info, this.foo);
            }
            doIt();
        };

        var thing = new Thing();
        thing.logFoo(); // output: "attempting to log this.foo: undefined"
    })();
}

var isDemo0904Run = false;
if (isDemo0904Run) { // #2, fix
    (function demo0904() {
        function Thing() {
        }
        Thing.prototype.foo = 'bar';
        Thing.prototype.logFoo = function () {
            var info = 'attempting to log this.foo:';
            var self = this;

            function doIt() {
                console.log(info, self.foo);
            }
            doIt();
        };

        var thing = new Thing();
        thing.logFoo(); // output: "attempting to log this.foo: bar"
    })();
}

var isDemo0905Run = false;
if (isDemo0905Run) { // #3
    (function demo0905() {
        function Thing() {
        }
        Thing.prototype.foo = 'bar';
        Thing.prototype.logFoo = function () {
            console.log(this.foo);
        };

        function doIt(method) {
            method();
        }

        var thing = new Thing();
        thing.logFoo(); // output: "bar"
        doIt(thing.logFoo); // output: undefined
    })();
}

var isDemo0906Run = false;
if (isDemo0906Run) { // #3, fix
    (function demo0906() {
        function Thing() {
        }
        Thing.prototype.foo = 'bar';
        Thing.prototype.logFoo = function () {
            console.log(this.foo);
        };

        function doIt(method) {
            method();
        }

        var thing = new Thing();
        thing.logFoo();
        doIt(thing.logFoo.bind(thing)); // output: bar
    })();
}

var isDemo0907Run = false;
if (isDemo0907Run) { // #4
    (function demo0907() {
        function logFoo() {
            console.log(this.foo);
        }

        var tmpObj = {
            foo: 'bar'
        };
        logFoo.bind(tmpObj)();
        logFoo.apply(tmpObj);
    })();
}

var isDemo0908Run = false;
if (isDemo0908Run) { // #5
    (function demo0908() {
        var tmpObj = {
            foo: 'bar',
            deeper: {
                logFoo: function () {
                    console.log(this.foo); // undefined
                }
            }
        };
        tmpObj.deeper.logFoo();
    })();
}

var isDemo0909Run = false;
if (isDemo0909Run) { // #5, fix
    (function demo0909() {
        var tmpObj = {
            foo: 'bar',
            deeper: {
                logFoo: function () {
                    console.log(tmpObj.foo);
                }
            }
        };
        tmpObj.deeper.logFoo();
    })();
}

var isDemo0910Run = false;
if (isDemo0910Run) { // #6
    (function demo0910() {
        function Thing() {
            this.handleEvent();
        }
        Thing.prototype.handleEvent = function () {
            console.log('handle event.');
        };

        var thing = new Thing(); // output: handle event.
        console.dir(thing);
    })();
}

var isDemo0911Run = false;
if (isDemo0911Run) { // #7
    (function demo0911() {
        function Thing(type) {
            this.type = type;
        }

        Thing.prototype.logThings = function (arrThings) {
            // arrThings.forEach(this.log.bind(this));
            arrThings.forEach(this.log, this); // bind context
        };
        Thing.prototype.log = function (strThingValue) {
            console.log(`${this.type}: ${strThingValue}`);
        };

        var thing = new Thing('fruit');
        thing.logThings(['apples', 'oranges', 'strawberries', 'bananas']);
    })();
}


// demo 10, OO inherit (prototype chain)
var isDemo10Run = false;
if (isDemo10Run) {
    (function demo10() {
        function Super() {
        }

        function Sub() {
        }
        Sub.prototype = new Super();

        var sub = new Sub();
        console.log('sub instanceof Sub:', sub instanceof Sub);
        console.log('sub instanceof Super:', sub instanceof Super);

        console.log(sub.constructor); // Super
        console.log(sub.__proto__.constructor); // Super

        //sub.constructor = Sub;  // reset constructor to point to self
        console.log('sub.constructor === Sub:', sub.constructor === Sub); // false
        console.log('sub.constructor === Super:', sub.constructor === Super); // true

        console.log(sub.__proto__.__proto__ === Super.prototype);
        console.log('Super.prototype.constructor === Super:', Super.prototype.constructor === Super);

        console.log('Sub.prototype instanceof Super:', Sub.prototype instanceof Super);
        console.log('Super.prototype instanceof Object:', Super.prototype instanceof Object);
    })();
}


// demo 11, let
var isDemo11Run = false;
if (isDemo11Run) {
    (function demo11() {
        var tmpArr = [];
        for (var i = 0; i < 10; i++) {
            tmpArr[i] = function () {
                console.log(i);
            }
        }
        tmpArr[8](); // 10

        var tmpArr1 = [];
        for (let m = 0; m < 10; m++) {
            tmpArr1[m] = function () {
                console.log(m);
            }
        }
        tmpArr1[8](); // 8
    })();
}


// demo 12, sync: callbacks, generator and promise (refer js_demo_03.js)
var timeDelay = function (waitTime, callback) {
    setTimeout(function () {
        callback('Pausing for ' + waitTime);
    }, waitTime);
};

var isDemo1201Run = false;
if (isDemo1201Run) {
    // #1, sync by callbacks: ok
    (function demo1201() {
        timeDelay(3000, function (message) {
            console.log(message);
            timeDelay(2000, function (message) {
                console.log(message);
                timeDelay(1000, function (message) {
                    console.log(message);
                });
            });
        });
    })();
}

var isDemo1202Run = false;
if (isDemo1202Run) {
    // #2, sync by generator, failed
    (function demo1202() {
        function *Messages() {
            yield(timeDelay(3000, function (message) {
                console.log(message);
            }));
            yield(timeDelay(2000, function (message) {
                console.log(message);
            }));
            return timeDelay(1000, function (message) {
                console.log(message);
            });
        }

        var messages = Messages();
        while (!messages.next().done) {
        }
    })();
}

var isDemo1203Run = false;
if (isDemo1203Run) {
    // #3, sync by promise: ok
    (function demo1203() {
        var promiseTimeDelay = function (waitTime) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log('Pausing for', waitTime);
                    waitTime -= 1000;
                    waitTime >= 1000 ? resolve(waitTime) : reject('time < 1000ms');
                }, waitTime);
            })
        };

        promiseTimeDelay(3000)
            .then(promiseTimeDelay)
            .then(promiseTimeDelay)
            .then(promiseTimeDelay)
            .then(promiseTimeDelay)
            .catch(function (err) {
                console.error('Error:', err);
            });
    })();
    console.log('sync promise demo.');
}


console.log(__filename, 'DONE.');
