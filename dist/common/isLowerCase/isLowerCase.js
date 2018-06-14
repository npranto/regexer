'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isLowerCase = function isLowerCase(str) {
  return !(0, _utils.isUndefined)(str) && !(0, _utils.isNull)(str) && (0, _utils.isString)(str) && /^[^A-Z]+$/.test(str);
};

exports.default = isLowerCase;