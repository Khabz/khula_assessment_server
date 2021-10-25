import { Router, Express } from 'express';

// Controllers
import * as Welcome from '../controllers/welcome.controller';
// Routes
import schoolRoutes from './school.routes';

const router = Router();

const Routes = (app: Express) => {
	// Server status
	app.use('/', router.get('/', Welcome.index));

	// Add more routes
	app.use('/api/school', schoolRoutes);
};

export default Routes;
