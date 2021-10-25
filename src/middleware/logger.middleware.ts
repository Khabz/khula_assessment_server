import { NextFunction, Request, Response } from 'express';
import Logger from '../utils/console';

const namespace = 'Logger';
export default (request: Request, response: Response, next: NextFunction) => {
	const startTime = new Date().getTime();

	response.on('finish', () => {
		const endTime = new Date().getTime();

		Logger.info(
			`${namespace}`,
			`[METHOD: ${request.method}] - [URL: ${`${
				request.protocol
			}://${request.get('host')}${request.originalUrl}`}] - [STATUS: ${
				response.statusCode
			}] - [RESPONSE_TIME - ${endTime - startTime}ms] - [IP: ${
				request.socket.remoteAddress
			}]`
		);
	});

	next();
};
