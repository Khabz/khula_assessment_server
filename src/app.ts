// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/first */
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import * as dotenv from 'dotenv';
import middlewareLogger from './middleware/logger.middleware';

dotenv.config({ path: `${path.join(__dirname, '..')}/.env` });
import routes from './routes/routes';

const app = express();

// const corsOptions = require('./config/corsOptions');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Security
app.use(helmet());

// Logger
app.use(middlewareLogger);

// Initialize routes

routes(app);

app.use((req, res) => {
	return res.status(404).send({
		status: 404,
		error: 'Resource not found',
	});
});

export default app;
