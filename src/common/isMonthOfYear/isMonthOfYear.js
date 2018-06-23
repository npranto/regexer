import { isUndefined, isNull } from './../../utils';

/**
 * @desc Returns true if number is a month of year (1-12), otherwise returns false
 * @param {number} number - a month 
 * @return {boolean} - true or false 
 *
 * @example
 * '4', 12
 */
const isMonthOfYear = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^((1[0-2])|(0?[1-9]{1}))$/.test(number)
);

export default isMonthOfYear;
