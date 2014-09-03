var _ = require('lodash');
var crypto = require('crypto');

module.exports = function objectMD5(obj) {
  // javascript objects are not required to maintain order
  // to solve this problem, get key value pairs and sort them
  var p = _.pairs(obj);
  p = _.sortBy(p, function(pair) {
    return pair[0];
  });
  return crypto.createHash('md5').update(JSON.stringify(p)).digest('hex');
}
