'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @desc returns true if value is a string, otherwise returns false
 * @param {?null} value - a string
 * @return {boolean} - true or false 
 */
var isString = function isString(value) {
  return typeof value === 'string';
};

exports.default = isString;