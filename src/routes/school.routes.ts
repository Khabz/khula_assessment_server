import express from 'express';
import schoolController from '../controllers/school.controller';

const router = express.Router();

router.get('/', schoolController.getSchools);

export default router;
