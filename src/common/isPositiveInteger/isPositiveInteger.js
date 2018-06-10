// @flow
import { isNull, isUndefined } from './../../utils';

const isPositiveInteger = (integer: string): boolean => {
	return !isUndefined(integer) && !isNull(integer) && /^\d+$/.test(integer);
};

export default isPositiveInteger;