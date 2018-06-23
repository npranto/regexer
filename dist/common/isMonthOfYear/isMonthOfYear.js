'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if number is a month of year (1-12), otherwise returns false
 * @param {number} number - a month 
 * @return {boolean} - true or false 
 *
 * @example
 * '4', 12
 */
var isMonthOfYear = function isMonthOfYear(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^((1[0-2])|(0?[1-9]{1}))$/.test(number);
};

exports.default = isMonthOfYear;