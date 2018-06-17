'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isStandardZipCode = function isStandardZipCode(zipCode) {
  return !(0, _utils.isUndefined)(zipCode) && !(0, _utils.isNull)(zipCode) && /^\d{5}(-\d{4})?$/.test(zipCode);
};

exports.default = isStandardZipCode;