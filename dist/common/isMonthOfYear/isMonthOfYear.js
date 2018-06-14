'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isMonthOfYear = function isMonthOfYear(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^((1[0-2])|(0?[1-9]{1}))$/.test(number);
};

exports.default = isMonthOfYear;