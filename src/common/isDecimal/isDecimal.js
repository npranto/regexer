import { isUndefined, isNull } from './../../utils';

const isDecimal = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^-?\d*\.\d+$/.test(number)
);

export default isDecimal;