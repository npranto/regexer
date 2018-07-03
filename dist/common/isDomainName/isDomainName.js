'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if domainName is a valid domain name, otherwise returns false
 * @param {string} domainName - a domain name
 * @return {boolean} - true or false
 *
 * @example
 * 'www.google.com', 'coffee.io'
 */
var isDomainName = function isDomainName(domainName) {
  return !(0, _utils.isUndefined)(domainName) && !(0, _utils.isNull)(domainName) && /^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-z]{2,}$/.test(domainName);
};

exports.default = isDomainName;