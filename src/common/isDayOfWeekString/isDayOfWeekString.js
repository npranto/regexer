import { isUndefined, isNull } from './../../utils';

/**
 * @desc Returns true if day is name of a week day, otherwise returns false
 * @param {number|string} day - day of week
 * @return {boolean} - true or false 
 *
 * @example
 * 'monday', 'Tuesday', 'FRIDAY'
 */
const isDayOfWeekString = day => (
  !isUndefined(day) &&
  !isNull(day) &&
  /^(monday|tuesday|wednesday|thursday|friday)$/i.test(day)
);

export default isDayOfWeekString;
