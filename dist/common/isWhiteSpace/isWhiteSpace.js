"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @desc Returns true if char a white space, otherwise returns false
 * @param {string} char - a space
 * @return {boolean} - true or false
 *
 * @example
 * ' ' - just a single white space
 */
var isWhiteSpace = function isWhiteSpace(char) {
  return (/^\s$/.test(char)
  );
};

exports.default = isWhiteSpace;