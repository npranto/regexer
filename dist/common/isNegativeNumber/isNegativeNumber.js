'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isNegativeNumber = function isNegativeNumber(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^((-)(\d+)(\.)?(\d+)?)|0$/.test(number);
};

exports.default = isNegativeNumber;