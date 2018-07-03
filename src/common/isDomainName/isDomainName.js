import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if domainName is a valid domain name, otherwise returns false
 * @param {string} domainName - a domain name
 * @return {boolean} - true or false
 *
 * @example
 * 'www.google.com', 'coffee.io'
 */
const isDomainName = domainName => (
  !isUndefined(domainName) &&
  !isNull(domainName) &&
  /^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-z]{2,}$/.test(domainName)
);

export default isDomainName;
