import { isNull, isUndefined, isString } from './../../utils';

/**
 * @desc Returns true if str an alphabetic letter, otherwise returns false
 * @param {string} str - a letter
 * @return {boolean} - true or false 
 *
 * @example
 * 'a', 'V'
 */
const isLetter = str => (
  !isUndefined(str) &&
  !isNull(str) &&
  isString(str) &&
  (str.length === 1) &&
  /^[A-Za-z]$/.test(str)
);

export default isLetter;
