'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isInteger = function isInteger(integer) {
  return !(0, _utils.isUndefined)(integer) && !(0, _utils.isNull)(integer) && /^-?\d+$/.test(integer);
};

exports.default = isInteger;