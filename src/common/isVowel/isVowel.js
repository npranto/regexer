import { isNull, isUndefined, isString } from './../../utils';

/**
 * @desc Returns true if char a vowel letter, otherwise returns false
 * @param {string} char - a vowel letter
 * @return {boolean} - true or false 
 *
 * @example
 * 'a', 'E', 'i', 'O', 'u'
 */
const isVowel = char => (
  !isUndefined(char) &&
  !isNull(char) &&
  isString(char) &&
  (char.length === 1) &&
  /^[a|e|i|o|u|A|E|I|O|U]$/.test(char)
);

export default isVowel;
