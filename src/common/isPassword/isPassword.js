import { isUndefined, isNull } from './../../utils';

const isPassword = (password) => {
	return !isUndefined(password) && !isNull(password) && (typeof password === 'string') && /^[\w-]{6,18}$/.test(password);
};

export default isPassword;