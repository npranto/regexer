import { isNull, isUndefined } from './../../utils';

const isLowerCase = (str) => {
	return !isUndefined(str) && !isNull(str) && (typeof str === 'string') && /^[^A-Z]+$/.test(str);
};

export default isLowerCase;