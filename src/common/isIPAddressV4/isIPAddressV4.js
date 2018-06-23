import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if ipAddress a valid IP address, otherwise returns false
 * @param {string} ipAddress - an IP address
 * @return {boolean} - true or false 
 *
 * @example
 * '172.16.254.1', '0.1.0.1'
 */
const isIPAddressV4 = ipAddress => (
  !isUndefined(ipAddress) &&
  !isNull(ipAddress) &&
  isString(ipAddress) &&
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)
);

export default isIPAddressV4;
