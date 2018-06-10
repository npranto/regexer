import { isUndefined, isNull, isString } from './../../utils';

const isIPAddressV4 = (ipAddress) => {
	return !isUndefined(ipAddress) && !isNull(ipAddress) && isString(ipAddress) && /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress);
};

export default isIPAddressV4;