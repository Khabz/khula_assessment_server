import { Sequelize } from 'sequelize';
import Logger from '../utils/console';

import dbConfig from './config';

const { DB_NAME, HOST_NAME, PORT, USER_NAME, PASSWORD } = dbConfig;

// const isProd = process.env.NODE_ENV === 'production';
const namespace = 'DB';

const db = new Sequelize(String(DB_NAME), String(USER_NAME), String(PASSWORD), {
	host: String(HOST_NAME),
	port: Number(PORT),
	dialect: 'mariadb',
});

export const SQ = db;

db.authenticate()
	.then(() => Logger.info(namespace, ': Database connection established'))
	.catch((error) =>
		Logger.error(namespace, ': Database connection failed', error)
	);

export default db;
