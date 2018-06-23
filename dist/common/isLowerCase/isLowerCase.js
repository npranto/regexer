'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if str contains all lower case letters, otherwise returns false
 * @param {string} str - a string 
 * @return {boolean} - true or false 
 *
 * @example
 * 'coffee', 'chai', 'cold', 'life is awesome'
 */
var isLowerCase = function isLowerCase(str) {
  return !(0, _utils.isUndefined)(str) && !(0, _utils.isNull)(str) && (0, _utils.isString)(str) && /^[^A-Z]+$/.test(str);
};

exports.default = isLowerCase;