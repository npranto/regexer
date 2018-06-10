// @flow
import { isUndefined, isNull } from './../../utils';

const isNumber = (number: number | string): boolean => {
	return !isUndefined(number) && !isNull(number) && /^(-)?(\d+)(\.)?(\d+)?$/.test(number);
};

export default isNumber;