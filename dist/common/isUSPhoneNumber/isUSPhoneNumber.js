'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if phoneNumber a valid US phone number, otherwise returns false
 * @param {string} phoneNumber - a phone number
 * @return {boolean} - true or false 
 *
 * @example
 * allows following formats => '6174330080', '(617) 433-0080', '(617)433-0080', '617.433.0080', '617-433-0080', '617 433 0080'
 */
var isUSPhoneNumber = function isUSPhoneNumber(phoneNumber) {
  return !(0, _utils.isUndefined)(phoneNumber) && !(0, _utils.isNull)(phoneNumber) && (0, _utils.isString)(phoneNumber) && /^(\()?(\d{3})(\))?[\s.-]?(\d{3})[\s.-]?(\d{4})$/.test(phoneNumber);
};

exports.default = isUSPhoneNumber;