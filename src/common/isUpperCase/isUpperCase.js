import { isNull, isUndefined, isString } from './../../utils';

const isUpperCase = (str) => {
	return !isUndefined(str) && !isNull(str) && isString(str) && /^[^a-z]+$/.test(str);
};

export default isUpperCase;