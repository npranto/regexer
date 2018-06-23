'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if char an alphabetic letter, otherwise returns false
 * @param {string} char - an alphabetic character
 * @return {boolean} - true or false 
 *
 * @example
 * 'a', 'V'
 */
var isLetter = function isLetter(char) {
  return !(0, _utils.isUndefined)(char) && !(0, _utils.isNull)(char) && (0, _utils.isString)(char) && char.length === 1 && /^[A-Za-z]$/.test(char);
};

exports.default = isLetter;