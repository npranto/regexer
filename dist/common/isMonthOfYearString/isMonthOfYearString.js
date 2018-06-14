'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isMonthOfYearString = function isMonthOfYearString(month) {
  return !(0, _utils.isUndefined)(month) && !(0, _utils.isNull)(month) && /^(january|february|march|april|may|june|july|august|september|october|november|december)$/i.test(month);
};

exports.default = isMonthOfYearString;