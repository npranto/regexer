'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if number is a positive number, otherwise returns false
 * @param {number|string} number - a number
 * @return {boolean} - true or false 
 *
 * @example
 * '4', '0.5', 74.23, 
 */
var isPositiveNumber = function isPositiveNumber(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^(\d+)(\.)?(\d+)?$/.test(number);
};

exports.default = isPositiveNumber;