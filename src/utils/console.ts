// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-console */

const getTimeStamp = () => {
	return new Date().toISOString();
};

const info = (namespace: string, message: string, object?: any) => {
	if (object) {
		console.log(
			`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
			object
		);
	} else {
		console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
	}
};

const warn = (namespace: string, message: string, object?: any) => {
	if (object) {
		console.warn(
			`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
			object
		);
	} else {
		console.warn(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
	}
};

const error = (namespace: string, message: string, object?: any) => {
	if (object) {
		console.error(
			`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
			object
		);
	} else {
		console.error(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
	}
};

export default {
	info,
	warn,
	error,
};
