'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if str an alphabetic letter, otherwise returns false
 * @param {string} str - a letter
 * @return {boolean} - true or false 
 *
 * @example
 * 'a', 'V'
 */
var isLetter = function isLetter(str) {
  return !(0, _utils.isUndefined)(str) && !(0, _utils.isNull)(str) && (0, _utils.isString)(str) && str.length === 1 && /^[A-Za-z]$/.test(str);
};

exports.default = isLetter;