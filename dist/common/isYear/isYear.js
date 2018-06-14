'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isYear = function isYear(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^\d{4}$/.test(number);
};

exports.default = isYear;