'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if zipCode is a valid zip code, otherwise returns false
 * @param {string} zipCode - a zip code
 * @return {boolean} - true or false 
 *
 * @example
 * allows following formats => '02166', '12045-6089'
 */
var isStandardZipCode = function isStandardZipCode(zipCode) {
  return !(0, _utils.isUndefined)(zipCode) && !(0, _utils.isNull)(zipCode) && (0, _utils.isString)(zipCode) && /^[0-9]{5}(-[0-9]{4})?$/.test(zipCode);
};

exports.default = isStandardZipCode;