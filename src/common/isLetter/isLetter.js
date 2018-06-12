import { isNull, isUndefined, isString } from './../../utils';

const isLetter = str => (
  !isUndefined(str) &&
  !isNull(str) &&
  isString(str) &&
  /^[A-Za-z]+$/.test(str)
);

export default isLetter;
