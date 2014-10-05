/**
 * Module dependencies
 */

var variables = require('rework-vars');
var assert = require('assert');

/**
 * Expose `transform()`.
 */

module.exports = transformVariables;

/**
 * Transform variables.
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */

function transformVariables(opts) {
  assert(!opts || 'object' == typeof opts, 'sheetify-variables: opts should be an object');

  return function() {
    return function(style, next) {
      next(null, variables(opts)(style));
    }
  }
}
