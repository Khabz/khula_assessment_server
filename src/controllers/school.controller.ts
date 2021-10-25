import { Response, Request } from 'express';
import ISchool from '../interfaces/ISchool';
import SchoolModel from '../models/School';

const getSchools = async (req: Request, res: Response) => {
	try {
		const fetchSchools = await SchoolModel.findAll();

		const schoolsArr: ISchool[] = [];

		fetchSchools.forEach((school) => {
			schoolsArr.push({
				id: school.id,
				name: school.name,
				address: school.address,
				latitude: school.latitude,
				longitude: school.longitude,
				imageLink: school.image_link,
			});
		});

		return res.status(200).json({
			success: true,
			data: schoolsArr,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'Something went wrong',
		});
	}
};

export default {
	getSchools,
};
