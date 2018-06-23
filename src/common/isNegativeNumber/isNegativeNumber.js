import { isUndefined, isNull } from './../../utils';

/**
 * @desc Returns true if number is a negative number, otherwise returns false
 * @param {number|string} number - a number
 * @return {boolean} - true or false 
 *
 * @example
 * '-0.44', -55, -1434.44
 */
const isNegativeNumber = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^((-)(\d+)(\.)?(\d+)?)|0$/.test(number)
);

export default isNegativeNumber;
