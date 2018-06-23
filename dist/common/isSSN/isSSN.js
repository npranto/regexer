'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if number is a valid social security number, otherwise returns false
 * @param {number|string} number - a number
 * @return {boolean} - true or false 
 *
 * @example
 * allows following formats => '031767927', '031-76-7927', '031 76 7927'
 */
var isSSN = function isSSN(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^(\d{3})(-|\s)?(\d{2})(-|\s)?(\d{4})$/.test(number);
};

exports.default = isSSN;