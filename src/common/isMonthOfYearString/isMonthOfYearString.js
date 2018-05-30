import { isUndefined, isNull } from './../../utils';

const isMonthOfYearString = (month) => {
	return !isUndefined(month) && !isNull(month) && /^(january|february|march|april|may|june|july|august|september|october|november|december)$/.test(month.toLowerCase());
};

export default isMonthOfYearString;
