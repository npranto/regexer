import { isUndefined, isNull } from './../../utils';

const isDayOfWeekString = (day) => {
	return !isUndefined(day) && !isNull(day) && /^(monday|tuesday|wednesday|thursday|friday)$/i.test(day);
};

export default isDayOfWeekString;