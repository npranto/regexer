// @flow
import { isNull, isUndefined, isString } from './../../utils';

const isHexValue = (hexValue: string): boolean => {
  return !isUndefined(hexValue) && !isNull(hexValue) && isString(hexValue) && /^#?([A-Za-z0-9]{3}|[A-Za-z0-9]{4}|[A-Za-z0-9]{6})$/.test(hexValue);
};

export default isHexValue;
