import { isNull, isUndefined, isString } from './../../utils';

/**
 * @desc Returns true if char an alphabetic letter, otherwise returns false
 * @param {string} char - an alphabetic character
 * @return {boolean} - true or false 
 *
 * @example
 * 'a', 'V'
 */
const isLetter = char => (
  !isUndefined(char) &&
  !isNull(char) &&
  isString(char) &&
  (char.length === 1) &&
  /^[A-Za-z]$/.test(char)
);

export default isLetter;
