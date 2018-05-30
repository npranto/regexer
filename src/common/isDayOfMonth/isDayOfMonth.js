import { isUndefined, isNull } from './../../utils';

const isDayOfMonth = (day) => {
	return !isUndefined(day) && !isNull(day) && /^((3[0-1])|([1-2]{1}\d{1})|(0?[1-9]{1}))$/.test(day);
};

export default isDayOfMonth;
