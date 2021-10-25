import { Response, Request } from 'express';
import schoolData from '../data/schools.json';
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

const importData = async (req: Request, res: Response) => {
	try {
		const schools: ISchool[] = [];
		schoolData.forEach(async (school) => {
			const newSchool = await SchoolModel.create({
				name: school.name,
				address: school.address,
				latitude: school.latitude,
				longitude: school.longitude,
				image_link:
					'https://icon-library.com/images/school-icon-transparent/school-icon-transparent-4.jpg',
			});
			schools.push({
				id: newSchool.id,
				name: newSchool.name,
				address: newSchool.address,
				latitude: newSchool.latitude,
				longitude: newSchool.longitude,
				imageLink: newSchool.image_link,
			});
		});

		return res.status(200).json({
			success: true,
			data: schools,
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
	importData,
};
