import { isUndefined, isNull } from './../../utils';

const isYear = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^\d{4}$/.test(number)
);

export default isYear;
