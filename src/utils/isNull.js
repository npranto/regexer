// @flow
import isUndefined from './isUndefined';

const isNull = (value: any): boolean => {
	return !isUndefined(value) && (value === null);
};

export default isNull;