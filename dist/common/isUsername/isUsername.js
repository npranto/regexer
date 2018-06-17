'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isUsername = function isUsername(username) {
  return !(0, _utils.isUndefined)(username) && !(0, _utils.isNull)(username) && (0, _utils.isString)(username) && /^[\w-]{3,16}$/.test(username);
};

exports.default = isUsername;