'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if number is a negative number, otherwise returns false
 * @param {number|string} number - a number
 * @return {boolean} - true or false 
 *
 * @example
 * '-0.44', -55, -1434.44
 */
var isNegativeNumber = function isNegativeNumber(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^((-)(\d+)(\.)?(\d+)?)|0$/.test(number);
};

exports.default = isNegativeNumber;