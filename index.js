var json_stringify = require('./lib/stringify.js').stringify;
var json_parse     = require('./lib/parse.js');
var BigNumber      = require('bignumber.js');

module.exports = function(options) {
    return  {
        parse: json_parse(options),
        stringify: json_stringify
    }
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = json_parse();
module.exports.stringify = json_stringify;
module.exports.JSON = {
	parse: json_parse(),
	stringify: json_stringify
}
module.exports.Number = BigNumber;
