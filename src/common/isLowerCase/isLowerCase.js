import { isNull, isUndefined, isString } from './../../utils';

const isLowerCase = str => (
  !isUndefined(str) &&
  !isNull(str) &&
  isString(str) &&
  /^[^A-Z]+$/.test(str)
);

export default isLowerCase;
