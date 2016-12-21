/**
 * Created by zhengjin on 2016/12/8.
 */
// demo 01, date
//var myDate = new Date();
//console.log('cur date: %d-%d-%d', myDate.getFullYear(), myDate.getMonth()+1, myDate.getDate());
//console.log('cur date:', [myDate.getFullYear(), myDate.getMonth()+1, myDate.getDate()].join('-'));

//console.log(myDate.getDate());
//console.log(myDate.getDay());


// demo 02, convert
//var tmpInt = 5;
//var tmpStr = String(tmpInt);
//console.log(typeof tmpStr);

//var tmpStr = '5';
//var tmpInt = parseInt(tmpStr);
//console.log(typeof tmpInt);

//var tmpStr = '';
//console.log(tmpStr.length);


// demo 03, expr
//var tmpStr = '低温 -2℃';
//var re = /(-?\d+)℃/;
//console.log(re.exec(tmpStr));

//var tmpStr = '(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{{BeiJing}}%22)%20and%20u%3D%22c%22';
//var re = /{{(.+)}}/;
//console.log(re.exec(tmpStr));


// demo 04, exit
//var tmpFlag = false;
//if (tmpFlag) {
//    console.log('true');
//} else {
//    console.log('false and return');
//    return;
//}


console.log(__filename, 'DONE.');
