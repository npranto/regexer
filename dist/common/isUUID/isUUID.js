'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if uuid is a valid universally unique identifier (UUID) v1 or v4, otherwise returns false
 * @param {string} uuid - a UUID 
 * @return {boolean} - true or false
 *
 * @example
 * 'aafac29e-5816-4904-87ef-3eb5151e0c9a', '66b9bb40-78d1-11e8-adc0-fa7ae01bbebc'
 */
var isUUID = function isUUID(uuid) {
  return !(0, _utils.isUndefined)(uuid) && !(0, _utils.isNull)(uuid) && (0, _utils.isString)(uuid) && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
};

exports.default = isUUID;