import { isUndefined, isNull } from './../../utils';

const isUSPhoneNumber = phoneNumber => (
  !isUndefined(phoneNumber) &&
  !isNull(phoneNumber) &&
  /^(\()?(\d{3})(\))?[\s.-]?(\d{3})[\s.-]?(\d{4})$/.test(phoneNumber)
);

export default isUSPhoneNumber;
