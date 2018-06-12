import { isUndefined, isNull } from './../../utils';

const isSSN = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^(\d{3})-?(\d{2})-?(\d{4})$/.test(number)
);

export default isSSN;
