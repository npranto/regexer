import { isUndefined, isNull, isString } from './../../utils';

/**
 * @desc Returns true if url a valid URL address, otherwise returns false
 * @param {string} url - an URL address
 * @return {boolean} - true or false 
 *
 * @example
 * 'http://3iem.museum:1337/', 'plik.co.uk'
 */
const isUrl = url => (
  !isUndefined(url) &&
  !isNull(url) &&
  isString(url) &&
  /^((((H|h)(T|t)|(F|f))(T|t)(P|p)((S|s)?))\:\/\/)?(www.|[a-zA-Z0-9].)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(\:[0-9]{1,5})*(\/($|[a-zA-Z0-9\.\,\;\?\'\\\+&amp;%\$#\=~_\-]+))*$/.test(url)
);

export default isUrl;
