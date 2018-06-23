'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if number a year, otherwise returns false
 * @param {number|string} number - a year
 * @return {boolean} - true or false 
 *
 * @example
 * 1345, 1784, 1934, 2012, 2018 
 */

var isYear = function isYear(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^[1-9]\d{3}$/.test(number);
};

exports.default = isYear;