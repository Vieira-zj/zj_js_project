/**
 * Created by zhengjin on 2016/11/28.
 *
 * Define the common utils and run settings.
 */

var getNumberFromTemp = function (temp) {
    var re = /(-?\d+)℃/;
    return re.exec(temp)[1];
};


module.exports = {
    isLog: true,
    getNumFromTemp: getNumberFromTemp
};
