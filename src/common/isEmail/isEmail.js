import { isUndefined, isNull } from './../../utils';

const isEmail = (email) => {
  return !isUndefined(email) && !isNull(email) && (typeof email === 'string') && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
};

export default isEmail;
