import { Request, Response } from 'express';
import SchoolModel from '../models/School';
import Logger from '../utils/console';

const NAMESPACE = 'SchoolsController';

interface ISchool {
	id: number;
	name: string;
	address: string;
	latitude: number;
	longitude: number;
	imageLink: string;
}

/**
 * @route  GET /api/schools
 * @desc   Get all schools
 * @access Public
 */
const getSchools = async (req: Request, res: Response) => {
	try {
		const fetchSchools = await SchoolModel.findAll();

		const schoolArr: ISchool[] = [];

		fetchSchools.forEach((school) => {
			const { id, name, address, latitude, longitude, image_link } =
				school;

			schoolArr.push({
				id,
				name,
				address,
				latitude,
				longitude,
				imageLink: image_link,
			});
		});

		// Sort schoolArr to alphabetically
		const sortArr = schoolArr.sort((a, b) => (a.name > b.name) ? 1 : -1);
		return res.status(200).json({
			success: true,
			data: sortArr,
		});
	} catch (error) {
		Logger.error(NAMESPACE, `${error}`);
		return res.status(500).json({
			success: false,
			error: 'Something went wrong',
		});
	}
};

export default {
    getSchools,
}
