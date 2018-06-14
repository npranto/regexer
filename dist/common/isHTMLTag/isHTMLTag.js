'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isHTMLTag = function isHTMLTag(htmlTag) {
  return !(0, _utils.isUndefined)(htmlTag) && !(0, _utils.isNull)(htmlTag) && (0, _utils.isString)(htmlTag) && /^<([a-z0-9]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/.test(htmlTag);
};

exports.default = isHTMLTag;