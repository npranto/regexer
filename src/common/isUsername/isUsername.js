import { isNull, isUndefined } from './../../utils';

const isUsername = (username) => {
  return !isUndefined(username) && !isNull(username) && (typeof username === 'string') && /^[\w-]{3,16}$/.test(username);
};

export default isUsername;
