'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if htmlTag is an HTML tag, otherwise returns false
 * @param {string} htmlTag - a HTML tag
 * @return {boolean} - true or false
 *
 * @example
 * '<h1 class="center"> Hello World </h1>
 */
var isHTMLTag = function isHTMLTag(htmlTag) {
  return !(0, _utils.isUndefined)(htmlTag) && !(0, _utils.isNull)(htmlTag) && (0, _utils.isString)(htmlTag) && /^<([a-z0-9]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/.test(htmlTag);
};

exports.default = isHTMLTag;