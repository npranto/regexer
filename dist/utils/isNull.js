'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isUndefined = require('./isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @desc returns true if value is null, otherwise returns false
 * @param {?null} value
 * @return {boolean} - true or false 
 */
var isNull = function isNull(value) {
  return !(0, _isUndefined2.default)(value) && value === null;
};

exports.default = isNull;