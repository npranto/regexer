'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if day is a day of the month (1-31), otherwise returns false
 * @param {number|string} day - day of month
 * @return {boolean} - true or false 
 *
 * @example
 * '1', 5, 29, 31
 */
var isDayOfMonth = function isDayOfMonth(day) {
  return !(0, _utils.isUndefined)(day) && !(0, _utils.isNull)(day) && /^((3[0-1])|([1-2]{1}\d{1})|(0?[1-9]{1}))$/.test(day);
};

exports.default = isDayOfMonth;