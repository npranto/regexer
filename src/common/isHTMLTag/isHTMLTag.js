import { isUndefined, isNull } from './../../utils';

const isHTMLTag = (htmlTag) => {
	return !isUndefined(htmlTag) && !isNull(htmlTag) && (typeof htmlTag === 'string') && /^<([a-z0-9]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/.test(htmlTag)
};

export default isHTMLTag;