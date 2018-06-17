'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isPassword = function isPassword(password) {
  return !(0, _utils.isUndefined)(password) && !(0, _utils.isNull)(password) && (0, _utils.isString)(password) && /^[\w-]{6,18}$/.test(password);
};

exports.default = isPassword;