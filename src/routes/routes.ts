import { Router, Express } from 'express';

// Controllers
import * as homeController from '../controllers/home.controller';
// routes
import schoolRoutes from './school.routes';

const router: Router = Router();

const routes = (app: Express) => {
    app.use('/', router.get('/', homeController.index));
    app.use('/', router.get('/status', homeController.status));
    //School routes
    app.use('/api/schools', schoolRoutes);
}

export default routes;