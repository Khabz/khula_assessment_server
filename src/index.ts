import app from './app';
import Logger from './utils/console';

const NAMESPACE = 'SERVER'

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

const server = app.listen(PORT, () => {
	Logger.info(`${NAMESPACE}`, `Server is running on port ${PORT} in ${ENV} mode`);
})

export default server;
