'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if integer is an integer, otherwise returns false
 * @param {number|string} integer - an integer
 * @return {boolean} - true or false
 *
 * @example
 * 455, '-44'
 */
var isInteger = function isInteger(integer) {
  return !(0, _utils.isUndefined)(integer) && !(0, _utils.isNull)(integer) && /^-?\d+$/.test(integer);
};

exports.default = isInteger;