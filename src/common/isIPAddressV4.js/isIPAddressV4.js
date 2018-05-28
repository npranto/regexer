import { isUndefined, isNull } from './../../utils';

const isIPAddressV4 = (ipAddress) => {
	return !isUndefined(ipAddress) && !isNull(ipAddress) && /^(([0-2]?\d?\d)\.){3}[0-2]?\d?\d$/.test(ipAddress);
};

export default isIPAddressV4;