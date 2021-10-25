import { Request, Response } from 'express';

/**
 * Welcome endpoint
 *
 * @route GET /
 */
export const index = async (request: Request, response: Response) => {
	return response.status(200).json({
		success: true,
		message: 'Alive and well',
	});
};

/**
 * Checks the status of the system
 *
 * @route GET /
 */
export const status = async (request: Request, response: Response) => {
	return response.status(200).json({
		success: true,
		message: 'Everything is 100%',
	});
};
