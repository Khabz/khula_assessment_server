import { Response, Request } from 'express';
import ISchool from '../interfaces/ISchool';
import SchoolModel from '../models/School';

const getPagination = (page: number, size: number) => {
	const limit = size ? +size : 3;
	const offset = page ? page * limit : 0;

	return { limit, offset };
};

const getPagingData = (
	data: ISchool[],
	count: number,
	page: number,
	limit: number
) => {
	const currentPage = page ? +page : 0;
	const totalPages = Math.ceil(count / limit);

	return {
		totalItems: count,
		schools: data,
		totalPages: totalPages - 1,
		currentPage,
	};
};

const getSchools = async (req: Request, res: Response) => {
	try {
		const { page } = req.query;

		const setPage = Number(page) || 1;
		const pageSize = 10;

		const { limit, offset } = getPagination(setPage, pageSize);

		const fetchSchools = await SchoolModel.findAndCountAll({
			limit,
			offset,
		});

		const { rows, count } = fetchSchools;

		const schoolsArr: ISchool[] = [];

		rows.forEach((school) => {
			schoolsArr.push({
				id: school.id,
				name: school.name,
				address: school.address,
				latitude: school.latitude,
				longitude: school.longitude,
				imageLink: school.image_link,
			});
		});

		const pagingData = getPagingData(schoolsArr, count, setPage, limit);

		// sort schoolsArr alphabetically
		// const formatedData = schoolsArr.sort((a, b) =>
		// 	a.name > b.name ? 1 : -1
		// );

		return res.status(200).json({
			success: true,
			data: pagingData,
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
