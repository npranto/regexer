import { isUndefined, isNull, isString } from './../../utils';

const isPassword = password => (
  !isUndefined(password) &&
  !isNull(password) &&
  isString(password) &&
  /^[\w-]{6,18}$/.test(password)
);

export default isPassword;
