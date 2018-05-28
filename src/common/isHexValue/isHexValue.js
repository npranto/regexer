import { isNull, isUndefined } from './../../utils';

const isHexValue = (hexValue) => {
  return !isUndefined(hexValue) && !isNull(hexValue) && (typeof hexValue === 'string') && /^#?([A-Za-z0-9]{3}|[A-Za-z0-9]{4}|[A-Za-z0-9]{6})$/.test(hexValue);
};

export default isHexValue;
