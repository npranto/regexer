import { isNull, isUndefined } from './../../utils';

/**
 * @desc Returns true if integer is a negative integer, otherwise returns false
 * @param {number|string} integer - an integer
 * @return {boolean} - true or false 
 *
 * @example
 * '-55', 6456, 0.33
 */
const isNegativeInteger = integer => (
  !isUndefined(integer) &&
  !isNull(integer) &&
  /^(-\d+)|0$/.test(integer)
);

export default isNegativeInteger;
