'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if integer is a negative integer, otherwise returns false
 * @param {number|string} integer - an integer
 * @return {boolean} - true or false 
 *
 * @example
 * '-55', -6456
 */
var isNegativeInteger = function isNegativeInteger(integer) {
  return !(0, _utils.isUndefined)(integer) && !(0, _utils.isNull)(integer) && /^(-\d+)|0$/.test(integer);
};

exports.default = isNegativeInteger;