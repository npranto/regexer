import { isUndefined, isNull } from './../../utils';

/**
 * @desc Returns true if day is a day of the month (1-31), otherwise returns false
 * @param {number|string} day - day of month
 * @return {boolean} - true or false 
 *
 * @example
 * '1', 5, 29, 31
 */
const isDayOfMonth = day => (
  !isUndefined(day) &&
  !isNull(day) &&
  /^((3[0-1])|([1-2]{1}\d{1})|(0?[1-9]{1}))$/.test(day)
);

export default isDayOfMonth;
