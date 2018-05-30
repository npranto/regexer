import { isUndefined, isNull } from './../../utils';

const isPositiveNumber = (number) => {
	return !isUndefined(number) && !isNull(number) && /^(\d+)(\.)?(\d+)?$/.test(number);
};

export default isPositiveNumber;