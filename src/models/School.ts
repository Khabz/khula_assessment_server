import { DataTypes, Model } from 'sequelize';
import db from '../config/database';

class School extends Model {
	public id!: number;

	public name!: string;

	public address!: string;

	public latitude!: number;

	public longitude!: number;

	// eslint-disable-next-line camelcase
	public image_link!: string;
}

School.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		image_link: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ sequelize: db, tableName: 'schools', timestamps: false }
);
export default School;
