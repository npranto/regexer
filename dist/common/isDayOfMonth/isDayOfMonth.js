'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isDayOfMonth = function isDayOfMonth(day) {
  return !(0, _utils.isUndefined)(day) && !(0, _utils.isNull)(day) && /^((3[0-1])|([1-2]{1}\d{1})|(0?[1-9]{1}))$/.test(day);
};

exports.default = isDayOfMonth;