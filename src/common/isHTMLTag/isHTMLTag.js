// @flow
import { isUndefined, isNull, isString } from './../../utils';

const isHTMLTag = (htmlTag: string): boolean => {
	return !isUndefined(htmlTag) && !isNull(htmlTag) && isString(htmlTag) && /^<([a-z0-9]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/.test(htmlTag)
};

export default isHTMLTag;