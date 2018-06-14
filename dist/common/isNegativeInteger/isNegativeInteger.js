'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isNegativeInteger = function isNegativeInteger(integer) {
  return !(0, _utils.isUndefined)(integer) && !(0, _utils.isNull)(integer) && /^(-\d+)|0$/.test(integer);
};

exports.default = isNegativeInteger;