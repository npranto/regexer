import { isUndefined, isNull } from './../../utils';

/**
 * @desc Returns true if month is a name of a month of year, otherwise returns false
 * @param {string} month - name of month 
 * @return {boolean} - true or false
 *
 * @example
 * 'march', 'APRIL', 'mAy'
 */
const isMonthOfYearString = month => (
  !isUndefined(month) &&
  !isNull(month) &&
  /^(january|february|march|april|may|june|july|august|september|october|november|december)$/i.test(month)
);

export default isMonthOfYearString;
