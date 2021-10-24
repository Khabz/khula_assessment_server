import express from 'express';
import schoolsController from '../controllers/schools.controller';

const router = express.Router();

router.get('/', schoolsController.getSchools);

export default router;