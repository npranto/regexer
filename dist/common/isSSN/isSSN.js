'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if number is a valid social security number, otherwise returns false
 * @param {string} ssn - a social security number
 * @return {boolean} - true or false 
 *
 * @example
 * allows following formats => '031767927', '031-76-7927', '031 76 7927'
 */
var isSSN = function isSSN(ssn) {
  return !(0, _utils.isUndefined)(ssn) && !(0, _utils.isNull)(ssn) && (0, _utils.isString)(ssn) && /^(\d{3})(-|\s)?(\d{2})(-|\s)?(\d{4})$/.test(ssn);
};

exports.default = isSSN;