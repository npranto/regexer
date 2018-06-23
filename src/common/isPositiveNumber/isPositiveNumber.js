import { isUndefined, isNull } from './../../utils';

/**
 * @desc Returns true if number is a positive number, otherwise returns false
 * @param {number|string} number - a number
 * @return {boolean} - true or false 
 *
 * @example
 * '4', '0.5', 74.23, 
 */
const isPositiveNumber = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^(\d+)(\.)?(\d+)?$/.test(number)
);

export default isPositiveNumber;
