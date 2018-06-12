import { isNull, isUndefined, isString } from './../../utils';

const isUsername = username => (
  !isUndefined(username) &&
  !isNull(username) &&
  isString(username) &&
  /^[\w-]{3,16}$/.test(username)
);

export default isUsername;

