import express from 'express';
import schoolController from '../controllers/school.controller';

const router = express.Router();

router.get('/', schoolController.getSchools);
router.get('/import-data', schoolController.importData);

export default router;
