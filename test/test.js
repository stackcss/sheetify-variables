/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var sheetify = require('sheetify');
var variables = require('../index');
var fs = require('fs');

/**
 * Test
 */

describe('sheetify-variables', function() {
  it('should transform variables', function(done) {
    var expects = fs.readFileSync(__dirname + '/fixtures/output.css', 'utf-8').trim();

    var bundler = sheetify(__dirname + '/fixtures/source.css');
    bundler.transform(variables());
    bundler.bundle(function(err, body) {
      (err === null).should.be.true;
      String(expects).should.eql(body.trim());
      done();
    });
  });
});
