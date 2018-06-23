'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @desc returns true if value is undefined, otherwise returns false
 * @param {?null} value
 * @return {boolean} - true or false 
 */
var isUndefined = function isUndefined(value) {
  return typeof value === 'undefined';
};

exports.default = isUndefined;