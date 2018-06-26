import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if time is in a valid 12-hour format (09:59), otherwise returns false
 * @param {string} time - a time 
 * @return {boolean} - true or false
 *
 * @example
 * allows following formats => '1:00', '03:56', '12:07'
 */
const is12HourTime = time => (
  !isUndefined(time) &&
  !isNull(time) &&
  isString(time) &&
  /^(([1-9]{1})|(1[0-2])|(0[1-9]{1})):[0-5]{1}\d{1}$/.test(time)
);

export default is12HourTime;
