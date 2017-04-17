/**
 * Created by Vieira on 2017/4/17.
 *
 * JQuery demos.
 */

var fs = require('fs');
var cheerio = require('cheerio');

var testFindById = function ($) {
    var tmpDiv = $('#div_test1');

    // jquery object => dom object
    var divDom = tmpDiv.get(0);
    console.log('text from dom object:', divDom.children[0].data);

    // dom object => jquery object
    var divJqObject = $(divDom);
    console.log('text from jquery object', divJqObject.text());
};

var testFindByClass = function ($) {
    var tmpDiv = $('div.green');
    console.log('text:', tmpDiv.text());
};

var testFindByLevels = function ($) {
    // parent => children
    var tmpLiJs1 = $('div#div_test2 li.lang-javascript');
    console.log('text:', tmpLiJs1.text());

    // parent => direct children
    var tmpLiJs2 = $('ul.lang>li.lang-javascript');
    console.log('text:', tmpLiJs2.text());

    // filter
    var tmpLiLua = $('div#div_test2>ul.lang>li:last-child');
    console.log('text:', tmpLiLua.text());

    var tmpLiPy = $('div#div_test2>ul.lang>li:nth-child(2)');
    console.log('text:', tmpLiPy.text());
};

var testFindFromJqObject = function ($) {
    var tmpLangUl = $('div#div_test3>ul.lang');

    // find()
    var swf = tmpLangUl.find('#swift');
    console.log('text:', swf.text());

    var hsk = tmpLangUl.find('[name=haskell]');
    console.log('text:', hsk.text());

    // parent()
    var js = hsk.parent().find('.js');
    console.log('text:', js.text());

    // next() and prev()
    var sch = swf.next();
    console.log('text:', sch.text());
    var py = swf.prev();
    console.log('text:', py.text());
};

var testFilterFromJqObject = function ($) {
    var tmpLangLis = $('div#div_test3>ul.lang>li');

    // filter
    var swf = tmpLangLis.filter('#swift');
    console.log('text:', swf.text());

    var tmpLangs = tmpLangLis.filter(function () {
        return this.children[0].data.indexOf('S') === 0;
    });
    console.log(tmpLangs.first().text());

    // map
    var tmpArr = tmpLangLis.map(function () {
        return this.children[0].data;
    }).get();
    console.log('Languages:', tmpArr);
};


if (require.main === module) {

    var content = fs.readFileSync('./html_template.html', 'utf8');
    $ = cheerio.load(content);

    testFindById($);
    testFindByClass($);
    testFindByLevels($);
    testFindFromJqObject($);
    testFilterFromJqObject($);

    console.log('JQuery demo done!');
}
