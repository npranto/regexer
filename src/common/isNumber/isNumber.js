import { isUndefined, isNull } from './../../utils';

/**
 * @desc Returns true if number is a number, otherwise returns false
 * @param {number|string} number - a number
 * @return {boolean} - true or false 
 *
 * @example
 * '-4.6', 0.34, -0.22, 45, 9980328.44
 */
const isNumber = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^(-)?(\d+)(\.)?(\d+)?$/.test(number)
);

export default isNumber;
