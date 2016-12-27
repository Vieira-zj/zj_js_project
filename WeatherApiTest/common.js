/**
 * Created by zhengjin on 2016/11/28.
 *
 * Define the common utils and run profiles.
 */

var getNumberFromTemp = function (temp) {
    var re = /(-?\d+)℃?/;
    var result = re.exec(temp);
    if (result) {
        return result[1];
    }
    return 'null';
};


module.exports = {
    isLog: true,
    getNumFromTemp: getNumberFromTemp
};
