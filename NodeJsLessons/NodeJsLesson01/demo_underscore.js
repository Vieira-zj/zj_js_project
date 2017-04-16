/**
 * Created by zhengjin on 2017/4/14.
 */

_ = require('underscore');

if (require.main === module) {
    tmpArr = ['a', 'b', 'c'];
    _.each(tmpArr, (num) => console.log(num));

    tmpObj = {one: 1, two: 2, three: 3};
    _.each(tmpObj, (key, value) => console.log([key, value].join(':')));

    console.log(__filename, 'DONE!');
}
