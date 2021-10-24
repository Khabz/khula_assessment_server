import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT: process.env.PORT || 4001,
    DB_PORT: process.env.DB_PORT || 3360,
    DB_NAME: process.env.DB_DATABASE || 'test',
	HOST_NAME: process.env.DB_HOST || 'localhost',
	DIALECT: process.env.DB_DIALECT || 'mariadb',
	PASSWORD: process.env.DB_PASSWORD || '',
	USERNAME: process.env.DB_USERNAME || '',
}