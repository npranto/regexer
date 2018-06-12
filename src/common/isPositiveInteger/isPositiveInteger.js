import { isNull, isUndefined } from './../../utils';

const isPositiveInteger = integer => (
  !isUndefined(integer) &&
  !isNull(integer) &&
  /^\d+$/.test(integer)
);

export default isPositiveInteger;
