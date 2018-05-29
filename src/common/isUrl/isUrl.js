import { isUndefined, isNull } from './../../utils';

const isUrl = (url) => {
	return !isUndefined(url) && !isNull(url) && (typeof url === 'string') && /^((((H|h)(T|t)|(F|f))(T|t)(P|p)((S|s)?))\:\/\/)?(www.|[a-zA-Z0-9].)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,6}(\:[0-9]{1,5})*(\/($|[a-zA-Z0-9\.\,\;\?\'\\\+&amp;%\$#\=~_\-]+))*$/.test(url);
};

export default isUrl;