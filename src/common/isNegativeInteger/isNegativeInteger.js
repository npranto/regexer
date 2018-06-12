import { isNull, isUndefined } from './../../utils';

const isNegativeInteger = integer => (
  !isUndefined(integer) &&
  !isNull(integer) &&
  /^(-\d+)|0$/.test(integer)
);

export default isNegativeInteger;
