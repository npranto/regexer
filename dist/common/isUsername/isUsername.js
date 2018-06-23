'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if username meets the basic requirement of an username (contains letters, numbers, hyphens, and underscores; length is between 3 to 16 characters), otherwise returns false
 * @param {number|string} username - an username
 * @return {boolean} - true or false 
 *
 * @example
 * jSmith455, kevin_bacon89, kevin, james-bond007 
 */
var isUsername = function isUsername(username) {
  return !(0, _utils.isUndefined)(username) && !(0, _utils.isNull)(username) && (0, _utils.isString)(username) && /^[\w-0]{3,16}$/.test(username);
};

exports.default = isUsername;