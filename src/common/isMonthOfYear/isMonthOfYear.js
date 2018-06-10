// @flow
import { isUndefined, isNull } from './../../utils';

const isMonthOfYear = (number: string): boolean => {
	return !isUndefined(number) && !isNull(number) && /^((1[0-2])|(0?[1-9]{1}))$/.test(number);
};

export default isMonthOfYear;