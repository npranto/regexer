import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if phoneNumber a valid US phone number, otherwise returns false
 * @param {string} phoneNumber - a phone number
 * @return {boolean} - true or false 
 *
 * @example
 * allows following formats => '6174330080', '(617) 433-0080', '(617)433-0080', '617.433.0080', '617-433-0080', '617 433 0080'
 */
const isUSPhoneNumber = phoneNumber => (
  !isUndefined(phoneNumber) &&
  !isNull(phoneNumber) &&
  isString(phoneNumber) &&
  /^(\()?(\d{3})(\))?[\s.-]?(\d{3})[\s.-]?(\d{4})$/.test(phoneNumber)
);

export default isUSPhoneNumber;
