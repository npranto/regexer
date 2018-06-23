import { isNull, isUndefined, isString } from './../../utils';

/**
 * @desc Returns true if str contains all upper case letters, otherwise returns false
 * @param {string} str - a string
 * @return {boolean} - true or false 
 *
 * @example
 * 'A', 'B', 'OH WOW!'
 */
const isUpperCase = str => (
  !isUndefined(str) &&
  !isNull(str) &&
  isString(str) &&
  /^[^a-z]+$/.test(str)
);

export default isUpperCase;
