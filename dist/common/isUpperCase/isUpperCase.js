'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isUpperCase = function isUpperCase(str) {
  return !(0, _utils.isUndefined)(str) && !(0, _utils.isNull)(str) && (0, _utils.isString)(str) && /^[^a-z]+$/.test(str);
};

exports.default = isUpperCase;