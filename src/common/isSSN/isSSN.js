import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if number is a valid social security number, otherwise returns false
 * @param {string} ssn - a social security number
 * @return {boolean} - true or false 
 *
 * @example
 * allows following formats => '031767927', '031-76-7927', '031 76 7927'
 */
const isSSN = ssn => (
  !isUndefined(ssn) &&
  !isNull(ssn) &&
  isString(ssn) &&
  /^(\d{3})(-|\s)?(\d{2})(-|\s)?(\d{4})$/.test(ssn)
);

export default isSSN;
