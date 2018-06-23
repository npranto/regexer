import isUndefined from './isUndefined';

/**
 * @desc returns true if value is null, otherwise returns false
 * @param {?null} value
 * @return {boolean} - true or false 
 */
const isNull = value => (
  !isUndefined(value) &&
  (value === null)
);

export default isNull;
