import { isNull, isUndefined } from './../../utils';

/**
 * @desc Returns true if integer is an integer, otherwise returns false
 * @param {number} integer - an integer
 * @return {boolean} - true or false
 *
 * @example
 * 455, '-44'
 */
const isInteger = integer => (
  !isUndefined(integer) &&
  !isNull(integer) &&
  /^-?\d+$/.test(integer)
);

export default isInteger;
