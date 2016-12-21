/**
 * Created by zhengjin on 2016/12/21.
 *
 * JS schema validate demo.
 * tv4 reference: https://github.com/geraintluff/tv4
 * JS schema reference: https://spacetelescope.github.io/understanding-json-schema/
 */
var tv4 = require('tv4');

var testJsonObject = {
    firstName: 'Zheng',
    lastName: 'Jin',
    status: 'ok'
};

var testSchema = {
    '$schema': 'http://json-schema.org/draft-04/schema#',
    'title': 'JavaScript schema validate demo.',
    'type': 'object',
    'properties': {
        'firstName': {
            'type': 'string'
        },
        'lastName': {
            'type': 'string'
        },
        'status': {
            'type': 'string',
            'pattern': '(o|O)|(k|K)'
        }
    },
    'required': ['firstName','lastName','status']
};


if (!tv4.validate(testJsonObject, testSchema)) {
//    console.log(tv4.error);
    console.log(tv4.error.message);
} else {
    console.log('JS schema validate pass.');
}

console.log(__filename, 'DONE!');
