import { isUndefined, isNull } from './../../utils';

const isNumber = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^(-)?(\d+)(\.)?(\d+)?$/.test(number)
);

export default isNumber;
