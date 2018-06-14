'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isSSN = function isSSN(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^(\d{3})-?(\d{2})-?(\d{4})$/.test(number);
};

exports.default = isSSN;