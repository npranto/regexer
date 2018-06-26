'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if time is in a valid 12-hour format (09:59), otherwise returns false
 * @param {string} time - a time 
 * @return {boolean} - true or false
 *
 * @example
 * allows following formats => '1:00', '03:56', '12:07'
 */
var is12HourTime = function is12HourTime(time) {
  return !(0, _utils.isUndefined)(time) && !(0, _utils.isNull)(time) && (0, _utils.isString)(time) && /^(([1-9]{1})|(1[0-2])|(0[1-9]{1})):[0-5]{1}\d{1}$/.test(time);
};

exports.default = is12HourTime;