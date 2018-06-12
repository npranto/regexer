// @flow
import { isUndefined, isNull, isString } from './../../utils';

const isEmail = email => (
  !isUndefined(email) &&
  !isNull(email) &&
  isString(email) &&
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase())
);

export default isEmail;
