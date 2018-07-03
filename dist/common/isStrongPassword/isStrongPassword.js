'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if password is what generally considered as a
 * strong password (must contain at least 1 lowercase alphabetical character,
 * 1 uppercase alphabetical character, 1 numeric character, one special 
 * character [!, @, #, $, %, ^. &, or *], and at least eight characters long), 
 * otherwise returns false
 * @param {string} password - a password
 * @return {boolean} - true or false
 *
 * @example
 * 'Ajohnson184&', 'kevinWilliamsBaller23^'
 */
var isStrongPassword = function isStrongPassword(password) {
  var strongPasswordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
  return !(0, _utils.isUndefined)(password) && !(0, _utils.isNull)(password) && (0, _utils.isString)(password) && strongPasswordRegex.test(password);
};

exports.default = isStrongPassword;