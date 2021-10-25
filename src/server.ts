// import errorHandler from 'errorhandler';
import app from './app';
import Logger from './utils/console';

const namespace = 'SERVER';

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === 'development') {
	// app.use(errorHandler());
}

const PORT = process.env.PORT || 4001;
const ENV = process.env.NODE_ENV || 'production';

/**
 * Start Express server.
 */
const server = app.listen(PORT, () => {
	Logger.info(
		`${namespace}:`,
		`App is running at http://localhost:${PORT} in ${ENV} mode`
	);
	Logger.info(`${namespace}:`, '\nPress CTRL-C to stop\n');
});

export default server;
