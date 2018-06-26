'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if time is in a valid 24-hour format (17:45), otherwise returns false
 * @param {string} time - a time 
 * @return {boolean} - true or false
 *
 * @example
 * allows following formats => '1:11', '02:00', '13:56', '23:07'
 */
var is24HourTime = function is24HourTime(time) {
  return !(0, _utils.isUndefined)(time) && !(0, _utils.isNull)(time) && (0, _utils.isString)(time) && /^(([1-9]{1})|(1\d)|(2[0-3])|(0[1-9]{1})):[0-5]{1}\d{1}$/.test(time);
};

exports.default = is24HourTime;