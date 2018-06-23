import { isUndefined, isNull } from './../../utils';

/**
 * @desc Returns true if number a year, otherwise returns false
 * @param {number|string} number - a year
 * @return {boolean} - true or false 
 *
 * @example
 * 1345, 1784, 1934, 2012, 2018 
 */

const isYear = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^[1-9]\d{3}$/.test(number)
);

export default isYear;
