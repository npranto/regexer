import { isNull, isUndefined, isString } from './../../utils';

/**
 * @desc Returns true if str contains all lower case letters, otherwise returns false
 * @param {string} str - a string 
 * @return {boolean} - true or false 
 *
 * @example
 * 'coffee', 'chai', 'cold', 'life is awesome'
 */
const isLowerCase = str => (
  !isUndefined(str) &&
  !isNull(str) &&
  isString(str) &&
  /^[^A-Z]+$/.test(str)
);

export default isLowerCase;
