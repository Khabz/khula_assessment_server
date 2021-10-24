import { Sequelize } from 'sequelize';
import config from './default';
import Logger from '../utils/console';

const NAMESPACE = 'DATABASE';

const { DB_NAME, HOST_NAME, DB_PORT, USERNAME, PASSWORD } = config;

const db = new Sequelize(String(DB_NAME), String(USERNAME), String(PASSWORD), {
	host: HOST_NAME,
	port: Number(DB_PORT),
	dialect: 'mariadb',
});

export const SQ = db;

db.authenticate().then(() => {
    Logger.info(NAMESPACE, 'Database connection has been established successfully.');
}).catch((error) => {
    Logger.error(NAMESPACE, 'Unable to connect to the database:', error);
})

export default db;
