'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if ipAddress a valid IP address, otherwise returns false
 * @param {string} ipAddress - an IP address
 * @return {boolean} - true or false 
 *
 * @example
 * '172.16.254.1', '0.1.0.1'
 */
var isIPAddressV4 = function isIPAddressV4(ipAddress) {
  return !(0, _utils.isUndefined)(ipAddress) && !(0, _utils.isNull)(ipAddress) && (0, _utils.isString)(ipAddress) && /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress);
};

exports.default = isIPAddressV4;