import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if email is a valid email address, otherwise returns false
 * @param {string} email - an email address
 * @return {boolean} - true or false
 *
 * @example
 * 'jsmith@gmail.com', 'npraxx@123gmail.co'
 */
const isEmail = email => (
  !isUndefined(email) &&
  !isNull(email) &&
  isString(email) &&
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase())
);

export default isEmail;
