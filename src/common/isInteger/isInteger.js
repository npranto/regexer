import { isNull, isUndefined } from './../../utils';

const isInteger = (integer) => {
	return !isUndefined(integer) && !isNull(integer) && /^-?\d+$/.test(integer);
};

export default isInteger;