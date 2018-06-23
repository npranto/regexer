import { isNull, isUndefined, isString } from './../../utils';

/**
 * @desc Returns true if hexValue is a valid hex value, otherwise returns false
 * @param {string} hexValue - a hex value
 * @return {boolean} - true or false
 *
 * @example
 * '#FBB', '#SHFF56', '#FF56'
 */
const isHexValue = hexValue => (
  !isUndefined(hexValue) &&
  !isNull(hexValue) &&
  isString(hexValue) &&
  /^#?([A-Za-z0-9]{3}|[A-Za-z0-9]{4}|[A-Za-z0-9]{6})$/.test(hexValue)
);

export default isHexValue;
