import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if htmlTag is an HTML tag, otherwise returns false
 * @param {string} htmlTag - a HTML tag
 * @return {boolean} - true or false
 *
 * @example
 * '<h1 class="center"> Hello World </h1>
 */
const isHTMLTag = htmlTag => (
  !isUndefined(htmlTag) &&
  !isNull(htmlTag) &&
  isString(htmlTag) &&
  /^<([a-z0-9]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/.test(htmlTag)
);

export default isHTMLTag;
