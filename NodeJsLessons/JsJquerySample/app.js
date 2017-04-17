/**
 * Created by Vieira on 2017/4/17.
 *
 * JQuery demos.
 */

var fs = require('fs');
var cheerio = require('cheerio');

var getTextOfDomObject = function (domObject) {
    return domObject.children[0].data;
};

var testFindById = function ($) {
    var tmpDiv = $('#div_test1');

    // jquery object => dom object
    var divDom = tmpDiv.get(0);
    console.log('text from dom object:', getTextOfDomObject(divDom));

    // dom object => jquery object
    var divJqObject = $(divDom);
    console.log('text from jquery object', divJqObject.text());
};

var testFindByClass = function ($) {
    var tmpDiv = $('div.green');
    console.log('inner html:', tmpDiv.html());
};

var testFindByLevels = function ($) {
    // parent => children
    var tmpLiJs1 = $('div#div_test2 li.lang-javascript');
    console.log('child text:', tmpLiJs1.text());

    // parent => 1 level children
    var tmpLiJs2 = $('ul.lang>li.lang-javascript');
    console.log('child text:', tmpLiJs2.text());

    // filter
    var tmpLiLua = $('div#div_test2>ul.lang>li:last-child');
    console.log('child text:', tmpLiLua.text());

    var tmpLiPy = $('div#div_test2>ul.lang>li:nth-child(2)');
    console.log('child text:', tmpLiPy.text());
};

var testFindFromJqObject = function ($) {
    var tmpLangUl = $('div#div_test3>ul.lang');

    // find()
    var swf = tmpLangUl.find('#swift');
    console.log('language text:', swf.text());

    var hsk = tmpLangUl.find('[name=haskell]');
    console.log('language text:', hsk.text());

    // parent()
    var js = hsk.parent().find('.js');
    console.log('language text:', js.text());

    // next() and prev()
    var sch = swf.next();
    console.log('language text:', sch.text());
    var py = swf.prev();
    console.log('language text:', py.text());
};

var testFilterFromJqObject = function ($) {
    var tmpLangLis = $('div#div_test3>ul.lang>li');

    // each
    tmpLangLis.each(function () {
        console.log('language:', getTextOfDomObject(this));
    });

    tmpLangLis.each(function (idx, element) {
        console.log('language:', $(element).text(), 'at position:', idx);
    });

    // filter
    var swf = tmpLangLis.filter('#swift');
    console.log('filter language:', swf.text());

    var tmpLangs = tmpLangLis.filter(function () {
        return getTextOfDomObject(this).indexOf('S') === 0;
    });
    console.log('language start with S at 1st:', tmpLangs.first().text());
    console.log('language start with S at 2nd:', getTextOfDomObject(tmpLangs.get(1)));

    // map
    var tmpArr = tmpLangLis.map(function () {
        return $(this).text();
    }).get();
    console.log('Languages:', tmpArr);
};

var testGetJqObjectAttr = function ($) {
    var tmpLangs = $('div#div_test3>ul>li');
    var tmpLang = tmpLangs.filter(function () {
        return getTextOfDomObject(this) === 'Haskell';
    });
    console.log('Haskell name attribute value:', tmpLang.attr('name'));
};


if (require.main === module) {

    var content = fs.readFileSync('./html_template.html', 'utf8');
    $ = cheerio.load(content);

    testFindById($);
    testFindByClass($);
    testFindByLevels($);
    testFindFromJqObject($);
    testFilterFromJqObject($);
    testGetJqObjectAttr($);

    console.log('JQuery demo done!');
}
