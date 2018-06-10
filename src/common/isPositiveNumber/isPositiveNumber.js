// @flow
import { isUndefined, isNull } from './../../utils';

const isPositiveNumber = (number: number | string): boolean => {
	return !isUndefined(number) && !isNull(number) && /^(\d+)(\.)?(\d+)?$/.test(number);
};

export default isPositiveNumber;