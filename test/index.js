var should = require('should');
var objectMD5 = require('..');

describe('objectMD5', function() {

  it('should return the same hash when the object is out of order', function() {
    var obj1 = {
      foo: 'bar',
      ping: 'pong'
    };
    var obj2 = {
      ping: 'pong',
      foo: 'bar'
    };

    var obj1Hash = objectMD5(obj1);
    var obj2Hash = objectMD5(obj2);

    obj1Hash.should.be.a.String;
    obj2Hash.should.be.a.String;

    obj1Hash.should.eql(obj2Hash);
  });

})
