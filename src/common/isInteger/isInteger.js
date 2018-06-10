// @flow
import { isNull, isUndefined } from './../../utils';

const isInteger = (integer: string | number): boolean => {
	return !isUndefined(integer) && !isNull(integer) && /^-?\d+$/.test(integer);
};

export default isInteger;