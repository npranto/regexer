'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if number is a decimal number, otherwise returns false
 * @param {number|string} number - a decimal number
 * @return {boolean} - true or false 
 *
 * @example
 * '55.55', -0.999
 */
var isDecimal = function isDecimal(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^-?\d*\.\d+$/.test(number);
};

exports.default = isDecimal;