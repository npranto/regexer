'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if integer is a positive integer, otherwise returns false
 * @param {number|string} integer - an integer
 * @return {boolean} - true or false
 *
 * @example
 * '55', 3, 4645645
 */
var isPositiveInteger = function isPositiveInteger(integer) {
  return !(0, _utils.isUndefined)(integer) && !(0, _utils.isNull)(integer) && /^\d+$/.test(integer);
};

exports.default = isPositiveInteger;