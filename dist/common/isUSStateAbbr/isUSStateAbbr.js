'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * @desc Returns true if stateAbbr an abbreviation of a name of one of US state, otherwise returns false
 * @param {string} stateAbbr - a state abbr
 * @return {boolean} - true or false 
 *
 * @example
 * 'MA', 'ny'
 */
var isUSStateAbbr = function isUSStateAbbr(stateAbbr) {
  return !(0, _utils.isUndefined)(stateAbbr) && !(0, _utils.isNull)(stateAbbr) && (0, _utils.isString)(stateAbbr) && /^((AK)|(AL)|(AR)|(AZ)|(CA)|(CO)|(CT)|(DC)|(DE)|(FL)|(GA)|(HI)|(IA)|(ID)|(IL)|(IN)|(KS)|(KY)|(LA)|(MA)|(MD)|(ME)|(MI)|(MN)|(MO)|(MS)|(MT)|(NC)|(ND)|(NE)|(NH)|(NJ)|(NM)|(NV)|(NY)|(OH)|(OK)|(OR)|(PA)|(RI)|(SC)|(SD)|(TN)|(TX)|(UT)|(VA)|(VT)|(WA)|(WI)|(WV)|(WY))$/i.test(stateAbbr);
};

exports.default = isUSStateAbbr;