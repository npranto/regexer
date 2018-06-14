'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isDayOfWeekString = function isDayOfWeekString(day) {
  return !(0, _utils.isUndefined)(day) && !(0, _utils.isNull)(day) && /^(monday|tuesday|wednesday|thursday|friday)$/i.test(day);
};

exports.default = isDayOfWeekString;