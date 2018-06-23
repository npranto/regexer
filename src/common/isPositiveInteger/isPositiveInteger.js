import { isNull, isUndefined } from './../../utils';

/**
 * @desc Returns true if integer is a positive integer, otherwise returns false
 * @param {number|string} integer - an integer
 * @return {boolean} - true or false
 *
 * @example
 * '55', 3, 4645645
 */
const isPositiveInteger = integer => (
  !isUndefined(integer) &&
  !isNull(integer) &&
  /^\d+$/.test(integer)
);

export default isPositiveInteger;
