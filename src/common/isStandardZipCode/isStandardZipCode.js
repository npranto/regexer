import { isUndefined, isNull } from './../../utils';

/**
 * @desc Returns true if zipCode is a valid zip code, otherwise returns false
 * @param {string} zipCode - a zip code
 * @return {boolean} - true or false 
 *
 * @example
 * allows following formats => '02166', '12045-6089'
 */
const isStandardZipCode = zipCode => (
  !isUndefined(zipCode) &&
  !isNull(zipCode) &&
  /^[0-9]{5}(-[0-9]{4})?$/.test(zipCode)
);

export default isStandardZipCode;
