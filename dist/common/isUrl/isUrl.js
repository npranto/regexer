'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if url a valid URL address, otherwise returns false
 * @param {string} url - an URL address
 * @return {boolean} - true or false 
 *
 * @example
 * 'http://3iem.museum:1337/', 'plik.co.uk'
 */
var isUrl = function isUrl(url) {
  return !(0, _utils.isUndefined)(url) && !(0, _utils.isNull)(url) && (0, _utils.isString)(url) && /^((((H|h)(T|t)|(F|f))(T|t)(P|p)((S|s)?))\:\/\/)?(www.|[a-zA-Z0-9].)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(\:[0-9]{1,5})*(\/($|[a-zA-Z0-9\.\,\;\?\'\\\+&amp;%\$#\=~_\-]+))*$/.test(url);
};

exports.default = isUrl;