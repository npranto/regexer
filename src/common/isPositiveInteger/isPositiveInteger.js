import { isNull, isUndefined } from './../../utils';

const isPositiveInteger = (integer) => {
	return !isUndefined(integer) && !isNull(integer) && /^\d+$/.test(integer);
};

export default isPositiveInteger;