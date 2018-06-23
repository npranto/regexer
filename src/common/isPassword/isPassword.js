import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if password meets simple ruleset of a password (contains letters, numbers, hyphens, and underscores; length is between 6 to 18 characters), otherwise returns false
 * @param {string} password - a password
 * @return {boolean} - true or false
 *
 * @example
 * 'i-love-cats_haha'
 */
const isPassword = password => (
  !isUndefined(password) &&
  !isNull(password) &&
  isString(password) &&
  /^[\w-]{6,18}$/.test(password)
);

export default isPassword;
