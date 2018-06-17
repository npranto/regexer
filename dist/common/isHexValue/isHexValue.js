'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isHexValue = function isHexValue(hexValue) {
  return !(0, _utils.isUndefined)(hexValue) && !(0, _utils.isNull)(hexValue) && (0, _utils.isString)(hexValue) && /^#?([A-Za-z0-9]{3}|[A-Za-z0-9]{4}|[A-Za-z0-9]{6})$/.test(hexValue);
};

exports.default = isHexValue;