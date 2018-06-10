// @flow
import { isNull, isUndefined } from './../../utils';

const isNegativeInteger = (integer: string | number): boolean => {
  return !isUndefined(integer) && !isNull(integer) && /^(-\d+)|0$/.test(integer);
};

export default isNegativeInteger;