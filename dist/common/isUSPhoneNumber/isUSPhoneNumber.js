'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isUSPhoneNumber = function isUSPhoneNumber(phoneNumber) {
  return !(0, _utils.isUndefined)(phoneNumber) && !(0, _utils.isNull)(phoneNumber) && /^(\()?(\d{3})(\))?[\s.-]?(\d{3})[\s.-]?(\d{4})$/.test(phoneNumber);
};

exports.default = isUSPhoneNumber;