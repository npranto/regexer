// @flow
import { isUndefined, isNull } from './../../utils';

const isYear = (number: number | string): boolean => {
	return !isUndefined(number) && !isNull(number) && /^\d{4}$/.test(number);
};

export default isYear;