'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isLetter = function isLetter(str) {
  return !(0, _utils.isUndefined)(str) && !(0, _utils.isNull)(str) && (0, _utils.isString)(str) && /^[A-Za-z]+$/.test(str);
};

exports.default = isLetter;