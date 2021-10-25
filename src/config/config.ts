export default {
	DB_NAME: process.env.DB_DATABASE,
	HOST_NAME: process.env.DB_HOST,
	PORT: process.env.DB_PORT,
	DIALECT: process.env.DB_DIALECT,
	PASSWORD: process.env.DB_PASSWORD,
	USER_NAME: process.env.DB_USERNAME,
	TOKEN_SECRET: process.env.TOKEN_SECRET,
	TOKEN_ISSUER: process.env.TOKEN_ISSUER,
	TOKEN_EXPIRETIME: process.env.TOKEN_EXPIRETIME,
	BuzzLynx_API_KEY: process.env.BuzzLynx_API_KEY,
	BuzzLynx_BASE_URL: process.env.BuzzLynx_BASE_URL,
};
