import { isUndefined, isNull } from './../../utils';

/**
 * @desc Returns true if number is a decimal number, otherwise returns false
 * @param {number|string} number - a decimal number
 * @return {boolean} - true or false 
 *
 * @example
 * '55.55', -0.999
 */
const isDecimal = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^-?\d*\.\d+$/.test(number)
);

export default isDecimal;