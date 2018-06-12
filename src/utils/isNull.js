import isUndefined from './isUndefined';

const isNull = value => (
  !isUndefined(value) &&
  (value === null)
);

export default isNull;
