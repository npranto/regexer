// @flow
import { isNull, isUndefined, isString } from './../../utils';

const isLowerCase = (str: string): boolean => {
	return !isUndefined(str) && !isNull(str) && isString(str) && /^[^A-Z]+$/.test(str);
};

export default isLowerCase;