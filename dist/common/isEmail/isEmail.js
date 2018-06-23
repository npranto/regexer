'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if email is a valid email address, otherwise returns false
 * @param {string} email - an email address
 * @return {boolean} - true or false
 *
 * @example
 * 'jsmith@gmail.com', 'npraxx@123gmail.co'
 */
var isEmail = function isEmail(email) {
  return !(0, _utils.isUndefined)(email) && !(0, _utils.isNull)(email) && (0, _utils.isString)(email) && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
};

exports.default = isEmail;