'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if month is a name of a month of year, otherwise returns false
 * @param {string} month - name of month 
 * @return {boolean} - true or false
 *
 * @example
 * 'march', 'APRIL', 'mAy'
 */
var isMonthOfYearString = function isMonthOfYearString(month) {
  return !(0, _utils.isUndefined)(month) && !(0, _utils.isNull)(month) && /^(january|february|march|april|may|june|july|august|september|october|november|december)$/i.test(month);
};

exports.default = isMonthOfYearString;