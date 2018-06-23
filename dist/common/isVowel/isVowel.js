'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if char a vowel letter, otherwise returns false
 * @param {string} char - a vowel letter
 * @return {boolean} - true or false 
 *
 * @example
 * 'a', 'E', 'i', 'O', 'u'
 */
var isVowel = function isVowel(char) {
  return !(0, _utils.isUndefined)(char) && !(0, _utils.isNull)(char) && (0, _utils.isString)(char) && char.length === 1 && /^[a|e|i|o|u|A|E|I|O|U]$/.test(char);
};

exports.default = isVowel;