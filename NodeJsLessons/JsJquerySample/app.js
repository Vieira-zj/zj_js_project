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
    var jqueryObj = $(divDom);
    console.log('text from jquery object', jqueryObj.text());
};

var testFindByClass = function ($) {
    var tmpObj = $('div.green');
    console.log('text:', tmpObj.text());
};

if (require.main === module) {

    var content = fs.readFileSync('./html_template.html', 'utf8');
    $ = cheerio.load(content);

    testFindById($);
    testFindByClass($);

    console.log(__filename, 'done!');
}
