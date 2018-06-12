import { isUndefined, isNull } from './../../utils';

const isPositiveNumber = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^(\d+)(\.)?(\d+)?$/.test(number)
);

export default isPositiveNumber;
