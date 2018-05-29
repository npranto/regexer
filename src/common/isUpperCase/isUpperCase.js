import { isNull, isUndefined } from './../../utils';

const isUpperCase = (str) => {
	return !isUndefined(str) && !isNull(str) && (typeof str === 'string') && /^[^a-z]+$/.test(str);
};

export default isUpperCase;