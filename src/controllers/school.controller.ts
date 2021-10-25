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

		// sort schoolsArr alphabetically
		const formatedData = schoolsArr.sort((a, b) =>
			a.name > b.name ? 1 : -1
		);

		return res.status(200).json({
			success: true,
			data: formatedData,
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
