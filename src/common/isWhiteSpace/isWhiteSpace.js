/**
 * @desc Returns true if char a white space, otherwise returns false
 * @param {string} char - a space
 * @return {boolean} - true or false
 *
 * @example
 * ' ' - just a single white space
 */
const isWhiteSpace = char => (
  /^\s$/.test(char)
);

export default isWhiteSpace;
