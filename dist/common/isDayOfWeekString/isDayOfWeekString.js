'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if day is name of a week day, otherwise returns false
 * @param {number|string} day - day of week
 * @return {boolean} - true or false 
 *
 * @example
 * 'monday', 'Tuesday', 'FRIDAY'
 */
var isDayOfWeekString = function isDayOfWeekString(day) {
  return !(0, _utils.isUndefined)(day) && !(0, _utils.isNull)(day) && /^(monday|tuesday|wednesday|thursday|friday)$/i.test(day);
};

exports.default = isDayOfWeekString;