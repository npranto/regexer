import isUndefined from './isUndefined';

const isNull = (value) => {
	return !isUndefined(value) && (value === null);
};

export default isNull;