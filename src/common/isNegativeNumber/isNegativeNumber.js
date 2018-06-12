import { isUndefined, isNull } from './../../utils';

const isNegativeNumber = number => (
  !isUndefined(number) &&
  !isNull(number) &&
  /^((-)(\d+)(\.)?(\d+)?)|0$/.test(number)
);

export default isNegativeNumber;
