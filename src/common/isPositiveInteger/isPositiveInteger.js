// @flow
import { isNull, isUndefined } from './../../utils';

const isPositiveInteger = (integer: number | string): boolean => {
	return !isUndefined(integer) && !isNull(integer) && /^\d+$/.test(integer);
};

export default isPositiveInteger;