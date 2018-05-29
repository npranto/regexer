import { isNull, isUndefined } from './../../utils';

const isVowel = (char) => {
	return !isUndefined(char) && !isNull(char) && (typeof char === 'string') && (char.length === 1) && /^[a|e|i|o|u|A|E|I|O|U]$/.test(char);
};

export default isVowel;