import { isNull, isUndefined } from './../../utils';

const isLetter = (str) => {
	return !isUndefined(str) && !isNull(str) && (typeof str === 'string') && /^[A-Za-z]+$/.test(str);
};

export default isLetter;