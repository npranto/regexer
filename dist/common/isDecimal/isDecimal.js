'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isDecimal = function isDecimal(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^-?\d*\.\d+$/.test(number);
};

exports.default = isDecimal;