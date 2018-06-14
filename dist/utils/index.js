'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.isUndefined = exports.isNull = undefined;

var _isNull2 = require('./isNull');

var _isNull3 = _interopRequireDefault(_isNull2);

var _isUndefined2 = require('./isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _isString2 = require('./isString');

var _isString3 = _interopRequireDefault(_isString2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNull = exports.isNull = _isNull3.default;
var isUndefined = exports.isUndefined = _isUndefined3.default;
var isString = exports.isString = _isString3.default;