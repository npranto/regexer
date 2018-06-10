import { isNull, isUndefined, isString } from './../../utils';

const isVowel = (char) => {
	return !isUndefined(char) && !isNull(char) && isString(char) && (char.length === 1) && /^[a|e|i|o|u|A|E|I|O|U]$/.test(char);
};

export default isVowel;