'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if number is a number, otherwise returns false
 * @param {number|string} number - a number
 * @return {boolean} - true or false 
 *
 * @example
 * '-4.6', 0.34, -0.22, 45, 9980328.44
 */
var isNumber = function isNumber(number) {
  return !(0, _utils.isUndefined)(number) && !(0, _utils.isNull)(number) && /^(-)?(\d+)(\.)?(\d+)?$/.test(number);
};

exports.default = isNumber;