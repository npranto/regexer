import { isUndefined, isNull } from './../../utils';

const isStandardZipCode = zipCode => (
  !isUndefined(zipCode) &&
  !isNull(zipCode) &&
  /^\d{5}(-\d{4})?$/.test(zipCode)
);

export default isStandardZipCode;
