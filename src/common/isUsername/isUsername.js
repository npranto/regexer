import { isNull, isUndefined, isString } from './../../utils';

/**
 * @desc Returns true if username meets the basic requirement of an username (contains letters, numbers, hyphens, and underscores; length is between 3 to 16 characters), otherwise returns false
 * @param {number|string} username - an username
 * @return {boolean} - true or false 
 *
 * @example
 * jSmith455, kevin_bacon89, kevin, james-bond007 
 */
const isUsername = username => (
  !isUndefined(username) &&
  !isNull(username) &&
  isString(username) &&
  /^[\w-0]{3,16}$/.test(username)
);

export default isUsername;

