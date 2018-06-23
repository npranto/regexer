'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if password meets simple ruleset of a password (contains letters, numbers, hyphens, and underscores; length is between 6 to 18 characters), otherwise returns false
 * @param {string} password - a password
 * @return {boolean} - true or false
 *
 * @example
 * 'i-love-cats_haha'
 */
var isPassword = function isPassword(password) {
  return !(0, _utils.isUndefined)(password) && !(0, _utils.isNull)(password) && (0, _utils.isString)(password) && /^[\w-]{6,18}$/.test(password);
};

exports.default = isPassword;