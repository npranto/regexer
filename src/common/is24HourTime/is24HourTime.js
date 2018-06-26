import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if time is in a valid 24-hour format (17:45), otherwise returns false
 * @param {string} time - a time 
 * @return {boolean} - true or false
 *
 * @example
 * allows following formats => '1:11', '02:00', '13:56', '23:07'
 */
const is24HourTime = time => (
  !isUndefined(time) &&
  !isNull(time) &&
  isString(time) &&
  /^(([1-9]{1})|(1\d)|(2[0-3])|(0[1-9]{1})):[0-5]{1}\d{1}$/.test(time)
);

export default is24HourTime;
