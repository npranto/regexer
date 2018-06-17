'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isIPAddressV4 = function isIPAddressV4(ipAddress) {
  return !(0, _utils.isUndefined)(ipAddress) && !(0, _utils.isNull)(ipAddress) && (0, _utils.isString)(ipAddress) && /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress);
};

exports.default = isIPAddressV4;