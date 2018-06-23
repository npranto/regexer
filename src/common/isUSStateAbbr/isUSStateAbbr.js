import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if stateAbbr an abbreviation of a name of one of US state, otherwise returns false
 * @param {string} stateAbbr - a state abbr
 * @return {boolean} - true or false 
 *
 * @example
 * 'MA', 'ny'
 */
const isUSStateAbbr = stateAbbr => (
	!isUndefined(stateAbbr) &&
	!isNull(stateAbbr) &&
	isString(stateAbbr) &&
	/^((AK)|(AL)|(AR)|(AZ)|(CA)|(CO)|(CT)|(DC)|(DE)|(FL)|(GA)|(HI)|(IA)|(ID)|(IL)|(IN)|(KS)|(KY)|(LA)|(MA)|(MD)|(ME)|(MI)|(MN)|(MO)|(MS)|(MT)|(NC)|(ND)|(NE)|(NH)|(NJ)|(NM)|(NV)|(NY)|(OH)|(OK)|(OR)|(PA)|(RI)|(SC)|(SD)|(TN)|(TX)|(UT)|(VA)|(VT)|(WA)|(WI)|(WV)|(WY))$/i.test(stateAbbr)
);

export default isUSStateAbbr;
