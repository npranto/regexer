import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if password is what generally considered as a
 * strong password (must contain at least 1 lowercase alphabetical character,
 * 1 uppercase alphabetical character, 1 numeric character, one special 
 * character [!, @, #, $, %, ^. &, or *], and at least eight characters long), 
 * otherwise returns false
 * @param {string} password - a password
 * @return {boolean} - true or false
 *
 * @example
 * 'Ajohnson184&', 'kevinWilliamsBaller23^'
 */
const isStrongPassword = (password) => {
  const strongPasswordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
  return (
    !isUndefined(password) &&
    !isNull(password) &&
    isString(password) &&
    strongPasswordRegex.test(password)
  );
};

export default isStrongPassword;
